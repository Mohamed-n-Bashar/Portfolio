/** @format */

import emailjs from "@emailjs/browser";

// Replace these with your actual values from EmailJS dashboard
const SERVICE_ID = "service_5kxqcnz";
const TEMPLATE_ID = "template_uatl5yr";
const PUBLIC_KEY = "kQgVspUKSCsHbKi7d"; // aka USER_ID

export const sendEmail = async (values: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const { name, email, subject, message } = values;

  const templateParams = {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message,
  };

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );
    console.log("Email sent successfully:", response.status, response.text);
    return response;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
};
