import "./Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <div className="contactHeader">
        <h1 className="contactTitle">Get in Touch</h1>
        <p className="contactDescription">
          Have questions about funding opportunities or need help with your application? 
          Our team of experts is here to support your funding journey every step of the way.
        </p>
      </div>

      {/* Contact Options - Same format as benefits cards */}
      <div className="contactContainer">
        <div className="firstContact">
          <h2>Email Support</h2>
          <p>Get help with your funding application or general inquiries via email.</p>
          <span>support@smefundmatch.com</span>
        </div>
        <div className="secondContact">
          <h2>Phone Support</h2>
          <p>Speak with our team directly via phone call for immediate assistance.</p>
          <span>+6012-345 678</span>
        </div>
        <div className="thirdContact">
          <h2>Live Chat</h2>
          <p>Chat with our expert support team in real-time. </p>
          <span>Available 9 AM - 5 PM (GMT+8)</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;