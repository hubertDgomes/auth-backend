import Mailchimp from "@mailchimp/mailchimp_transactional";
import 'dotenv/config'

const client = Mailchimp(process.env.MAILCHIMP);

const emailVar = async (email, otp, name) => {
  try {
    const response = await client.messages.send({
      message: {
        from_email: "gomeshubert8@gmail.com",
        subject: "Verify your email",
        html: `
          <p>Hello ${name},</p>
          <p>Use this OTP to verify your email: <b>${otp}</b></p>
        `,
        to: [
          {
            email: email,
            type: "to",
          },
        ],
      },
    });
    console.log("Email sent:", response);
  } catch (err) {
    console.error("Mailchimp email error:", err);
  }
};

export default emailVar;