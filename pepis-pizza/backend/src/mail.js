const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const makeANiceEmail = text => `
  <div className="email" style="
    border: 1px solid black;
    padding: 20px;
    font-family: sans-serif;
  ">
  <div  style=" background: #FF7000; height: 100px; display: grid; grid-template-rows: 65px 40px; grid-gap: 0px;">
    <h1 style="color: white; text-align: center; line-height: 45px; font-size: 53px; ">Pepi's Pizza</h1>
    <h3 style=" color: black; text-align: center; line-height: 30px; font-size: 13px;">est. 1961</h3>
  </div>
  <h3>Password Reset</h3>
    <p>${text}</p>

    <p>Pepi's Pizza.</p>
    <p>The Best Pizza and Subs 😘🍕</p>
  </div>
`;

exports.transport = transport;
exports.makeANiceEmail = makeANiceEmail;
