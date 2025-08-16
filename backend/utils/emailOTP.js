const nodemailer = require("nodemailer");

async function sendEmail({ to, subject, html }) {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Game API" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("📧 Email sent: " + info.response);
    return info;
  } catch (err) {
    console.error("❌ Email sending failed:", err);
    throw err;
  }
}

module.exports = sendEmail;
