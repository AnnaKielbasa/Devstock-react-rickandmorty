import { useState } from "react";
import "./Contact.css";

const Contact =()=> {
  const [formData, setFormData] = useState([]);
  const formDefault = { email: "", message: "" };
  const handleSetFormChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    formDefault[fieldName] = fieldValue;
  };
  const handleAddFormData = (e) => {
    e.preventDefault();
    const newFormData = [
      {
        email: formDefault.email,
        message: formDefault.message,
      },
    ];

    setFormData(newFormData);
  };
  return (
    <div>
      <form>
        <h2 className="form-header"> Form</h2>
        <input
          type="email"
          name="email"
          placeholder="Type your email..."
          onChange={handleSetFormChange}
        />
        <input
          type="text"
          name="message"
          placeholder="Type your message..."
          onChange={handleSetFormChange}
        />
        <button type="submit" onClick={handleAddFormData}>
          Send
        </button>
        {formData.length > 0 && (
          <div className="added-info-container">
            <h6>Your data:</h6>
            {formData.map(({ email, message }, index) => (
              <div key={index} className="new-form-data-container">
                <div key={email}>Email: {email}</div>
                <div key={message}>Message: {message}</div>
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
}

export default Contact;
