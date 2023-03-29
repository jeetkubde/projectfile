import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="form-containerName">    
      <form>
      <h1>Send a message to us!</h1>
        <div className="ui form contact">
          <div className="field contact">
            <label>Name</label>
            <input type="text" name="Name" placeholder="Name" />
          </div>
          <div className="field contact">
            <label>Email</label>
            <input type="text" name="Email" placeholder="Email" />
          </div>
          <div className="field contact">
            <label>Subject</label>
            <input type="text" name="Subject" placeholder="Subject" />
          </div>
          <div className="field contact">
            <label>Massage</label>
            <input type="text" name="Massage" placeholder="Massage" />
          </div>
          <button className="fluid ui button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
