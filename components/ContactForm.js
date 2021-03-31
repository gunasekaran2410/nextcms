export default function ContactForm() {
    return (
      <form name="contact" method="POST" data-netlify="true" action="/success">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="yourname">
            Your Name:
          </label> <br />
          <input type="text" name="name" id="yourname" />
        </p>
        <p>
          <label htmlFor="yourcontact">
            Your Contact:
          </label> <br />
          <input type="text" name="contact" id="yourcontact" />
        </p>
        <p>
          <label htmlFor="youremail">
            Your Email:
          </label> <br />
          <input type="email" name="email" id="youremail" />
        </p>
        <p>
          <label htmlFor="yourmessage">
            Message:
          </label> <br />
          <textarea name="message" id="yourmessage"></textarea>
        </p>
        <p>
          <label htmlFor="myfile">
           File:
          </label> <br />
          <input type="file" name="myfile" id="myfile" placeholder="upload file" />
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    )
  }