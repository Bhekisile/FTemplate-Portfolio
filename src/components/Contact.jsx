import Navigation from './Navigation';
import Footer from './Footer';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/Contact.scss';
import { NavLink } from 'react-router-dom';

function Contact() {
  const [state, handleSubmit] = useForm('mpznvgqj');
  
  if (state.succeeded) {
      document.getElementById('contact-form')?.reset();
    return (
      <div className="contact-thankyou">
        <p>Thank you for reaching out!</p>
        <NavLink to='/'>
          <button type='button' className="contact-thankyou__btn" >Return</button>
        </NavLink>
      </div>
    );
  }

  return (
    <div>
      <Navigation />
      <div className="contact-container">
        <div className="contact-center">
          <h1>Get in touch</h1>
          <p className='mb-0'>I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.</p>
        </div>

        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder='Please enter your email' 
              required 
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input type="number" id="mobile" name="mobile" placeholder='+233546227839' />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              className="message" 
              name="message" 
              placeholder='Enter your message' 
              required 
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-form"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Contact