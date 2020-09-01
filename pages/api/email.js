export default (req, res) => {
  const mailgun = require("mailgun-js");
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  });

  const { firstName, lastName, email, subject, body } = JSON.parse(req.body);

  const emailData = {
    from: `${firstName} ${lastName} <${email}>`,
    to: "johnrubio93@gmail.com",
    subject,
    text: body,
  };

  mg.messages().send(emailData, (error, response) => {
    if (error) {
      res.status(error.statusCode || 400).json(error);
    } else {
      res.status(200).json(response);
    }
  });
};
