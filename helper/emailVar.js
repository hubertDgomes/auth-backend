import nodemailer from "nodemailer";
import "dotenv/config";

const emailVar = async (email, otp, name) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: "Email Verification",
    text: `Hello ${name}, your OTP is: ${otp}`,
    html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Email Verification</title>
</head>
<body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#f4f4f4;">
  
  <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:40px auto; background:#ffffff; border-radius:8px; overflow:hidden;">
    
    <tr>
      <td style="background:#4f46e5; padding:20px; text-align:center; color:#ffffff;">
        <h2 style="margin:0;">Verify Your Email</h2>
      </td>
    </tr>

    <tr>
      <td style="padding:30px; text-align:center;">
        <p style="font-size:16px; color:#333;">
          Hello, ${name}
        </p>

        <p style="font-size:16px; color:#333;">
          Use the OTP below to verify your email address. This code is valid for 10 minutes.
        </p>

        <div style="margin:30px 0;">
          <span style="display:inline-block; padding:15px 30px; font-size:28px; font-weight:bold; letter-spacing:5px; background:#f3f4f6; border-radius:6px;">
            ${otp}
          </span>
        </div>

        <p style="font-size:14px; color:#777;">
          If you did not request this, please ignore this email.
        </p>
      </td>
    </tr>

    <tr>
      <td style="background:#f9fafb; padding:15px; text-align:center; font-size:12px; color:#999;">
        © 2026 Your Company. All rights reserved.
      </td>
    </tr>

  </table>

</body>
</html>`,
  });
};

export default emailVar;
