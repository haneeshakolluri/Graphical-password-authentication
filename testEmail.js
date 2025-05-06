import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aishwaryaadla7@gmail.com',  // your SMTP user
        pass: 'xotqqlxjetaqphfw',  // your Gmail App Password here
    }
});

const mailOptions = {
    from: 'graphicalpassauth@gmail.com',
    to: 'aishwaryaadla7@gmail.com',  // Change this to your own email for testing
    subject: 'Test Email',
    text: 'This is a test email from Nodemailer.'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
