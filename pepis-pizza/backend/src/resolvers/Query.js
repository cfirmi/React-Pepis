const { forwardTo } = require('prisma-binding');
const { hasPermission } = require('../utils'); 


const Query = {
  toppingItems: forwardTo('db'),
  toppingItem: forwardTo('db'),
  me(parent, args, ctx, info) {
    //Check if there is a current user ID
    if(!ctx.request.userId) {
      return null; 
    }
    return ctx.db.query.user({
      where: { id: ctx.request.userId }
    }, info);
  },
  async users(parent, agrs, ctx, info) {
    if(!ctx.request.userId) {
      throw new Error('You must be logged in')
    }
    hasPermission(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE']);

    return ctx.db.query.users({},info);
  },
  

  // async toppings(parent, args, ctx, info) {
  //   const toppingItems = await ctx.db.query.toppingItems();
  //   return toppingItems;
  // }

  // async adminUsers(parent, args, ctx, info) {
  //   if(!ctx.request.userId) {
  //     throw new Error('You must be logged in')
  //   }
  //   hasPermission(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE']);

  //   return ctx.db.query.users({},info);
  // }

};

module.exports = Query;
