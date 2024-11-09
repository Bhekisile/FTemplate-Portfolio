import Header from './Header';
import '../styles/Contact.scss';

const contact = () => {
  return (
    <div>
      <Header />
      <div className="contact-container">
        <h1>Get in touch</h1>
        <p>I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.</p>
        <form>
          <label htmlFor="name">Email</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Mobile</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      
    </div>
  )
}

export default contact