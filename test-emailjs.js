// Simple EmailJS test
import emailjs from "@emailjs/browser";

const testEmailJS = async () => {
  try {
    console.log("Testing EmailJS...");

    const serviceId = "service_kvkkg3u";
    const templateId = "template_te8oy1x";
    const publicKey = "RCZKA-KIoftE32Ht4";

    const templateParams = {
      from_name: "Test User",
      from_email: "test@example.com",
      message: "This is a test message",
      to_name: "Sahasra",
    };

    console.log("Sending test email with params:", templateParams);

    const result = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );
    console.log("Success:", result);
    return result;
  } catch (error) {
    console.error("Error:", error);
    console.error("Error details:", {
      message: error.message,
      status: error.status,
      text: error.text,
    });
    throw error;
  }
};

export default testEmailJS;
