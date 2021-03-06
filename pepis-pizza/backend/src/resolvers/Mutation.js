const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const { promisify } = require('util');
const { transport, makeANiceEmail } = require('../mail');
const { hasPermission } = require('../utils');
const stripe = require('../stripe');

const Mutations = {
//SignUp User
async signup(parent, args, ctx, info) {
  // lowercase their email
  // Notes: Doesnt work on array of email
  args.email = args.email.toLowerCase();
  // hash their password
  const password = await bcrypt.hash(args.password, 10);
  // create the user in the database
  const user = await ctx.db.mutation.createUser(
    {
      data: {
        ...args,
        password,
        permissions: { set: ['USER'] },
      },
    },
    info
  );
  // create the JWT token for them
  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
  // We set the jwt as a cookie on the response
  ctx.response.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
  });
  // Finalllllly we return the user to the browser
  return user;
},

  //SignIn User
  async signin(parent, { email, password }, ctx, info) {
    // 1. check if there is a user with that email
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`No such user found for email ${email}`);
    }
    // 2. Check if their password is correct
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid Password!');
    }
    // 3. generate the JWT Token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // 4. Set the cookie with the token
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });
    // 5. Return the user
    return user;
  },

  signout(parent, args, ctx, info) {
    ctx.response.clearCookie('token');
    return { message: 'Goodbye!'};
  },

  async requestReset(parent, args, ctx, info) {
    // 1. Check if this is a real user
    const user = await ctx.db.query.user({ where: { email: args.email } });
    if (!user) {
      throw new Error(`No such user found for email ${args.email}`);
    }
    // 2. Set a reset token and expiry on that user
    const randomBytesPromiseified = promisify(randomBytes);
    const resetToken = (await randomBytesPromiseified(20)).toString('hex');
    const resetTokenExpiry = Date.now() + 3600000; // 1 hour from now
    const res = await ctx.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry },
    });
    // 3. Email them that reset token
    const mailRes = await transport.sendMail({
      from: 'christian@pepispizza.ca',
      to: user.email,
      subject: 'Pepi\'s PizzsYour Password Reset ' ,
      html: makeANiceEmail(`<h2 style="text-align: center;">${user.name}, Here is the reset button!</h2>
      <br>
      <a href="${process.env
        .FRONTEND_URL}/reset?resetToken=${resetToken}">
        <button style="margin-left: 50%; transform: translateX(-50%); border: 1px solid transparent; padding: 5px 55px; background: #ff7000; height: 45px; border-radius: 0px; color: white; font-size: 17px; ">Click Me</button>
      </a>`),
    });
    return { message: 'Thanks!' };
  },

    // Reset the Password
    async resetPassword(parent, args, ctx, info) {
      // 1. check if the passwords match
      if (args.password !== args.confirmPassword) {
        throw new Error("Yo Passwords don't match!");
      }
      // 2. check if its a legit reset token
      // 3. Check if its expired
      const [user] = await ctx.db.query.users({
        where: {
          resetToken: args.resetToken,
          resetTokenExpiry_gte: Date.now() - 3600000,
        },
      });
      if (!user) {
        throw new Error('This token is either invalid or expired!');
      }
      // 4. Hash their new password
      const password = await bcrypt.hash(args.password, 10);
      // 5. Save the new password to the user and remove old resetToken fields
      const updatedUser = await ctx.db.mutation.updateUser({
        where: { email: user.email },
        data: {
          password,
          resetToken: null,
          resetTokenExpiry: null,
        },
      });
      // 6. Generate JWT
      const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
      // 7. Set the JWT cookie
      ctx.response.cookie('token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 365,
      });
      // 8. return the new user
      return updatedUser;
    },
    async adminAccess(parent, args, ctx, info) {
      // 1. Check if they are logged in
      if (!ctx.request.userId) {
        throw new Error('You must be logged in as a Admin!');
      }
      // 2. Query the current user
      const currentUser = await ctx.db.query.user(
        {
          where: {
            id: ctx.request.userId,
          },
        },
        info
      );
      hasPermission(currentUser, ['ADMIN', 'PERMISSIONUPDATE'])

      return adminAccess;
    },

    async updatePermissions(parent, args, ctx, info) {
      // 1. Check if they are logged in
      if (!ctx.request.userId) {
        throw new Error('You must be logged in as a Admin!');
      }
      // 2. Query the current user
      const currentUser = await ctx.db.query.user(
        {
          where: {
            id: ctx.request.userId,
          },
        },
        info
      );
      // 3. Check if they have permissions to do this
      hasPermission(currentUser, ['ADMIN', 'PERMISSIONUPDATE']);
      // 4. Update the permissions
      return ctx.db.mutation.updateUser(
        {
          data: {
            permissions: {
              set: args.permissions,
            },
          },
          where: {
            id: args.userId,
          },
        },
        info
      );
    },
  //
  // toppingItems
  //
  async createToppingItem(parent, args, ctx, info) {
    // if (!ctx.request.userId) {
    //   throw new Error('You must be logged in as a Admin!');
    // }
    const topping = await ctx.db.mutation.createtoppingItem({
      data: {
        ...args
      }
    }, info);
    return topping;
  },
  updateToppingItem(parent, args, ctx, info) {
    const updates = { ...args };
    delete updates.id;
    return ctx.db.mutation.updatetoppingItem({
      data: updates,
      where: {
        id: args.id
      }
    }, info);
  },



};

module.exports = Mutations;
