import Header from './Header';
import '../styles/Contact.scss';

const contact = () => {
  return (
    <div>
      <Header />
      <div className="contact-container">
        <div className="contact-center">
          <h1>Get in touch</h1>
          <p className='mb-0'>I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.</p>
        </div>
        <form id="contact-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder='Please enter your email' required />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input type="mobile" id="mobile" name="mobile" placeholder='Enter mobile' required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" className="message" name="message" placeholder='Enter your message' required />
          </div>
          <button type="submit" className="btn btn-form">Submit</button>
        </form>
      </div>
      
    </div>
  )
}

export default contact