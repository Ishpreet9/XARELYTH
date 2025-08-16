const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail", // or 'smtp.mailtrap.io' etc.
  auth: {
    user: process.env.EMAIL_USER, // your gmail
    pass: process.env.EMAIL_PASS, // app password (NOT your real gmail password)
  },
});

/**
 * Send Email Helper
 * @param {Object} options
 * @param {string} options.to
 * @param {string} options.subject
 * @param {string} options.html
 */
async function sendEmail({ to, subject, html }) {
  try {
    await transporter.sendMail({
      from: `"Game API 🎮" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });
    console.log(`✅ Email sent to ${to}`);
  } catch (err) {
    console.error("❌ Email error:", err);
    throw new Error("Email could not be sent");
  }
}

module.exports = sendEmail;
