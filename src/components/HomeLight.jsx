import React, { Component } from 'react'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'
import './Home.css';
import NavBar from './NavBar.jsx'
import axios from 'axios'
import PropTypes from 'prop-types';

class HomeLight extends Component {
  constructor(){
    super()

    this.state={
        feedback: '',
        formSubmitted: false,
        name: '',
        email: '',
        message: '',
        receiverEmail: "emmit.parubrub@gmail.com",
        templateId: "template_zKdmfjDV"
    }
  }

  handleCancel = this.handleCancel.bind(this);
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  static sender = 'emmit.parubrub@gmail.com';

  handleCancel() {
    this.setState({
      feedback: ''
    });
  }

  handleChange(event) {
    if (event.target.name === "name"){
      this.setState({
        name: event.target.value
      });
    } 
    else if (event.target.name === "email"){
      this.setState({
        email: event.target.value
      });
    }
    else if (event.target.name === "message"){
      this.setState({
        message: event.target.value
      });
    }
    else{
      console.log("Error with field")
    }
  }

  handleSubmit(event) {
    event.preventDefault()

    this.setState({
      message: event.target.name + ": \n"
    });

    this.sendEmail(
      this.state.templateId,
      this.state.email,
      this.state.receiverEmail,
      this.state.message)

    this.setState({
      formSubmitted: true
    })
  }

  sendEmail (templateId, sender_email, receiver_email, message) {
    window.emailjs.send(
      'mailgun',
      templateId,
      {
        sender_email,
        receiver_email,
        message
      })
      .then(res => {
        console.log("Email Sent")
        this.setState({ formEmailSent: true })
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Failed to send feedback. Error: ', err))
  }

  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
    const script2 = document.createElement('script');
    script2.setAttribute('src',  'https://assets.juicer.io/embed.js');
    head.appendChild(script2);
  }

  render() {
    return (
      <div className="body">
      <NavBar/>
      <img className="background-image" src="assets/Hawaii.jpg"/>
          
          <a name="howitworks"></a>
          <div className="section text_then_image">
            <div className="text_section_left">
              <h1 className="text_section_title">How it Works</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus tempus nisi eget congue. Vivamus id nisi erat. Curabitur sit amet volutpat risus. Donec sit amet cursus est. Vivamus facilisis sem lorem, eu lacinia eros vulputate sit amet. Donec dignissim posuere orci, sed tempus neque. Nullam quis elementum ante, posuere euismod neque. Mauris tellus risus, tempor vel ante eu, venenatis vestibulum urna. Ut eu aliquam nibh. Suspendisse potenti. Sed enim nibh, tristique eu ligula ac, imperdiet convallis ipsum.
                  Pellentesque vel luctus arcu. Suspendisse vitae nibh metus. Curabitur id velit nec magna dignissim imperdiet. Fusce vitae augue elit. Vivamus sagittis pulvinar massa vitae sagittis. Pellentesque ac lacinia lectus, sit amet fermentum turpis. Ut sit amet congue tellus. Pellentesque consectetur lectus et mollis ultricies. Aliquam cursus erat id commodo facilisis. Phasellus velit nisl, condimentum vitae tincidunt in, venenatis nec nisl.</p>
            </div>
            <img className="image_section" src="assets/meeting.jpg"/>
          </div>

          <a id="booking"></a>
          <div className="section_grey_light image_then_text">
            <div className="booking_form_container">
              <div className="booking_form">
                <h1 className="flex_box">
                  <div className="center">Book Now</div>
                </h1>
                <Form className="form" onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="name">Name:</Label>
                    <Input
                      type="text"
                      name="name"
                      value={this.feedback}
                      onChange={this.handleChange}/>
                  </FormGroup>

                  <FormGroup>
                    <Label for="email">Email:</Label>
                    <Input
                      type="email"
                      name="email"
                      onChange={this.handleChange}/>
                  </FormGroup>

                  <FormGroup>
                    <Label for="message">
                                          What kind of traveler are you?
                                          When was your last experience traveling somewhere new?
                                          Do you have questions/comments for me?
                                          :</Label>
                    <Input
                      type="textarea"
                      name="message"
                      onChange={this.handleChange}/>
                  </FormGroup>

                  <FormGroup className="text-center">
                    <Button>Submit</Button>
                  </FormGroup>
                </Form>
              </div>
            </div>
          </div>

          <a name="reviews"></a>
          <div className="section image_then_text">
              <div className="instagram_feed">
                <link href="https://assets.juicer.io/embed.css" media="all" rel="stylesheet" type="text/css" />
                <ul className="juicer-feed" data-feed-id="emmitario"><h1 className="referral"></h1></ul>
             </div>
             <div className="text_section_right">
                  <h1 className="text_section_title">
                    Reviews/Social Media 
                    <a href="https://www.instagram.com/ponnellsplan/"><img className="social_media_icon" src="assets/instagram.png"/></a>
                  </h1>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus tempus nisi eget congue. Vivamus id nisi erat. Curabitur sit amet volutpat risus. Donec sit amet cursus est. Vivamus facilisis sem lorem, eu lacinia eros vulputate sit amet. Donec dignissim posuere orci, sed tempus neque. Nullam quis elementum ante, posuere euismod neque. Mauris tellus risus, tempor vel ante eu, venenatis vestibulum urna. Ut eu aliquam nibh. Suspendisse potenti. Sed enim nibh, tristique eu ligula ac, imperdiet convallis ipsum.
                      Pellentesque vel luctus arcu. Suspendisse vitae nibh metus. Curabitur id velit nec magna dignissim imperdiet. Fusce vitae augue elit. Vivamus sagittis pulvinar massa vitae sagittis. Pellentesque ac lacinia lectus, sit amet fermentum turpis. Ut sit amet congue tellus. Pellentesque consectetur lectus et mollis ultricies. Aliquam cursus erat id commodo facilisis. Phasellus velit nisl, condimentum vitae tincidunt in, venenatis nec nisl.</p>
                </div>
             
          </div>

          <a name="Ashley"></a>
          <div className="section_grey_light text_then_image">
            <div className="text_section_left">
              <h1 className="text_section_title">
                Ashley P. Walker 
                <a href="https://www.instagram.com/ponnellsplan/"><img class="social_media_icon" src="assets/instagram.png"/></a>
                <img class="social_media_icon" src="assets/twitter.png"/>
                </h1>
              <p>I am the founder of Ponnell's Plan! I graduated from Montclair State University with a Bachelor's in Family Science and Human Development and a Master's in the Arts of Teaching. 
                Since I am an educator, my students and I often go on new adventures through literature. Traveling can give you the opportunity to learn, influence and grow in various ways. 
                You can learn a lot from people of all different people and environments! I have traveled to about 10 different countries and have found that the experiences gained are like no other. 
                I found that seeking new experiences is a wonderful way to maximize opportunities in my life which is why I help others plan their dream trips!</p>
            </div>
            <img class="image_section" src="assets/Ashley.jpg"/>
          </div>

          <a name="Chantelle"></a>
          <div className="section image_then_text">
            <img className="image_section" src="assets/Chantelle.png"/>
            <div className="text_section_right">
              <h1 className="text_section_title">
                Chantelle Patel 
                <img className="social_media_icon" src="assets/instagram.png"/>
                <img className="social_media_icon" src="assets/twitter.png"/>
                </h1>
              <p>I graduated with from Quinnipiac Schools of Business with a Bachelor of Science degree in Marketing and Public Relations. 
                I love working with clients and showcasing their best skills. My passions include traveling, experiencing different people 
                and cultures and being able to promote those through various social media platforms. </p>
            </div>
          </div>

          <a name="Emmit"></a>
          <div className="section_grey_light text_then_image">
            <div className="text_section_left">
              <h1 className="text_section_title">
                Emmit Parubrub 
                <a href="https://www.instagram.com/emmitario/"><img className="social_media_icon" src="assets/instagram.png"/></a>
                <img className="social_media_icon" src="assets/twitter.png"/>
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus tempus nisi eget congue. Vivamus id nisi erat. Curabitur sit amet volutpat risus. Donec sit amet cursus est. Vivamus facilisis sem lorem, eu lacinia eros vulputate sit amet. Donec dignissim posuere orci, sed tempus neque. Nullam quis elementum ante, posuere euismod neque. Mauris tellus risus, tempor vel ante eu, venenatis vestibulum urna. Ut eu aliquam nibh. Suspendisse potenti. Sed enim nibh, tristique eu ligula ac, imperdiet convallis ipsum.
                  Pellentesque vel luctus arcu. Suspendisse vitae nibh metus. Curabitur id velit nec magna dignissim imperdiet. Fusce vitae augue elit. Vivamus sagittis pulvinar massa vitae sagittis. Pellentesque ac lacinia lectus, sit amet fermentum turpis. Ut sit amet congue tellus. Pellentesque consectetur lectus et mollis ultricies. Aliquam cursus erat id commodo facilisis. Phasellus velit nisl, condimentum vitae tincidunt in, venenatis nec nisl.</p>
            </div>
            <img className="image_section" src="assets/Emmit.png"/>
          </div>

      <div className="section_footer">
        <div className="footer">
              © 2019 Copyright: 
              <a className="footer_link" href="http://eparubrub.github.io"> Powered By Emmit Parubrub</a>
          </div>
      </div>

    </div>
    )
  }
}
export default HomeLight