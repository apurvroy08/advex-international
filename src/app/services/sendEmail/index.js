import nodemailer from "nodemailer";
const sendEmail = async (userData) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS,
      },
    });

    const { name, email, mobile } = userData;
    const options = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "Test mail",
      text: `Hello, New user registered
             User details: 
             Name: ${name}
             Email: ${email}
             Mobile: ${mobile}
      `,
    };
    try {
      const response = await transporter.sendMail(options);
    }
    catch (e) {
    }


  } catch (err) {
  }
};

export default sendEmail;
