import React, { useRef, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    const form = formRef.current;
    const name = form["from_name"].value?.trim();
    const email = form["from_email"].value?.trim();
    const message = form["message"].value?.trim();
    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }
    try {
      setSending(true);
      setStatus("");
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      console.log("EmailJS Config:", { serviceId, templateId, publicKey });
      
      if (!serviceId || !templateId || !publicKey) {
        setStatus("Email service not configured. Contact via email instead.");
        setSending(false);
        return;
      }
      
      console.log("Form data:", {
        name: form["from_name"].value,
        email: form["from_email"].value,
        message: form["message"].value
      });
      
      // Check if form fields exist
      console.log("Form fields check:", {
        hasFromName: !!form["from_name"],
        hasFromEmail: !!form["from_email"],
        hasMessage: !!form["message"]
      });
      
      // Test EmailJS connection first
      console.log("Testing EmailJS connection...");
      
      // Try sending with explicit parameters instead of form
      const templateParams = {
        from_name: form["from_name"].value,
        from_email: form["from_email"].value,
        message: form["message"].value,
        to_name: "Sahasra" // Add recipient name
      };
      
      console.log("Template params:", templateParams);
      console.log("Service ID:", serviceId);
      console.log("Template ID:", templateId);
      console.log("Public Key:", publicKey);
      
      // Test with minimal parameters first
      const testParams = {
        from_name: "Test User",
        from_email: "test@example.com", 
        message: "Test message",
        to_name: "Sahasra"
      };
      
      console.log("Testing with minimal params:", testParams);
      const result = await emailjs.send(serviceId, templateId, testParams, publicKey);
      console.log("EmailJS result:", result);
      setStatus("Message sent successfully!");
      form.reset();
    } catch (err) {
      // If the first method fails, try with sendForm as fallback
      console.log("First method failed, trying sendForm...");
      try {
        const fallbackResult = await emailjs.sendForm(serviceId, templateId, form, { publicKey });
        console.log("Fallback result:", fallbackResult);
        setStatus("Message sent successfully!");
        form.reset();
        return;
      } catch (fallbackErr) {
        console.error("Fallback also failed:", fallbackErr);
        console.error("EmailJS Error:", err);
        console.error("Error details:", {
          message: err.message,
          status: err.status,
          text: err.text,
          response: err.response
        });
        setStatus(`Failed to send message: ${err.message || err.status || 'Unknown error'}. Please try again later.`);
      }
    } finally {
      setSending(false);
    }
  };
  return (
    <div className="container-xxl py-6 d-flex align-items-center justify-content-center min-vh-100" id="contact" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h3 className="text-uppercase mb-2" style={{ color: 'var(--brand-orange)' }}>Contact Me</h3>
          <h3 className="text-dark text-uppercase mb-2">Get In Touch</h3>
        </div>
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-6">
            <div className="contact-card h-100 p-4">
              <h5 className="mb-3">Send me a message</h5>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="from_name"
                    placeholder="Your Name"
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="from_email"
                    placeholder="Your Email"
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Your Message"
                    id="message"
                    name="message"
                    style={{ height: "150px" }}
                  ></textarea>
                  <label htmlFor="message">Message</label>
                </div>
                <button
                  className="btn py-3 px-5"
                  style={{ backgroundColor: 'var(--brand-orange)', borderColor: 'var(--brand-orange)', color: 'white' }}
                  type="submit"
                  disabled={sending}
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
                {status && (
                  <div className="mt-3 small text-muted">{status}</div>
                )}
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-12">
                <div className="contact-card p-4 h-100 d-flex align-items-center">
                  <div className="contact-icon me-3">
                    <FaEnvelope />
                  </div>
                  <div>
                    <div className="fw-semibold">Email</div>
                    <a
                      href="mailto:sahasralive21@gmail.com"
                      className="text-decoration-none"
                    >
                      sahasralive21@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="contact-card p-4 h-100 d-flex align-items-center">
                  <div className="contact-icon me-3">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <div className="fw-semibold">Phone</div>
                    <a href="tel:+94764047158" className="text-decoration-none">
                      +94 76 404 7158
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="contact-card p-4 h-100 d-flex align-items-center">
                  <div className="contact-icon me-3">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <div className="fw-semibold">Location</div>
                    <div>Hambantota, Sri Lanka</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
