import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import emailjs from "emailjs-com";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertMessage: "",
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_t1cevng",
        "template_89houub",
        e.target,
        "5ntQcS_3uQjFpPQnl"
      )
      .then((res) => {
        this.setState({
          alertMessage: "Successfully sent the email!",
        });
      })
      .catch((err) => {
        this.setState({
          alertMessage: "Something went wrong!",
        });
      });
  }

  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form name="contactForm" onSubmit={(e) => this.handleSubmit(e)}>
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      size="35"
                      id="contactName"
                      name="contactName"
                      // onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      //onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      //onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      name="contactMessage"
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit" type="submit">
                      Submit
                    </button>
                  </div>
                </fieldset>
              </form>

              <div>
                {this.state.alertMessage}
                <br />
              </div>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  {name}
                  <br />
                  {street} <br />
                  {city}, {state} {zip}
                  <br />
                  <span>{phone}</span>
                </p>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
