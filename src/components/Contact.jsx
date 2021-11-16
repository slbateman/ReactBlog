import ContactImg from "./ContactImg";
import ContactForm from "./ContactForm";

function Contact() {
  console.log("--Contact--")
  return (
    <div className="contact-page">
      <ContactForm />
      <ContactImg />
    </div>
  );
}

export default Contact;
