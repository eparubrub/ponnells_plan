import React, { Component } from 'react'
import './Home.css';
import NavBarLight from './NavBarLight.jsx'


class HomeLight extends Component {
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
      <NavBarLight/>
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
          <div class="section_calendy">
            
          </div>

          <a name="reviews"></a>
          <div class="section image_then_text">
              <div class="instagram_feed">
                <link href="https://assets.juicer.io/embed.css" media="all" rel="stylesheet" type="text/css" />
                <ul class="juicer-feed" data-feed-id="emmitario"><h1 class="referral"></h1></ul>
             </div>
             <div class="text_section_right">
                  <h1 class="text_section_title">Reviews/Social Media</h1>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus tempus nisi eget congue. Vivamus id nisi erat. Curabitur sit amet volutpat risus. Donec sit amet cursus est. Vivamus facilisis sem lorem, eu lacinia eros vulputate sit amet. Donec dignissim posuere orci, sed tempus neque. Nullam quis elementum ante, posuere euismod neque. Mauris tellus risus, tempor vel ante eu, venenatis vestibulum urna. Ut eu aliquam nibh. Suspendisse potenti. Sed enim nibh, tristique eu ligula ac, imperdiet convallis ipsum.
                      Pellentesque vel luctus arcu. Suspendisse vitae nibh metus. Curabitur id velit nec magna dignissim imperdiet. Fusce vitae augue elit. Vivamus sagittis pulvinar massa vitae sagittis. Pellentesque ac lacinia lectus, sit amet fermentum turpis. Ut sit amet congue tellus. Pellentesque consectetur lectus et mollis ultricies. Aliquam cursus erat id commodo facilisis. Phasellus velit nisl, condimentum vitae tincidunt in, venenatis nec nisl.</p>
                </div>
             
          </div>

          <a name="Ashley"></a>
          <div class="section_grey_light text_then_image">
            <div class="text_section_left">
              <h1 class="text_section_title">Ashley P. Walker</h1>
              <p>I am the founder of Ponnell's Plan! I graduated from Montclair State University with a Bachelor's in Family Science and Human Development and a Master's in the Arts of Teaching. 
                Since I am an educator, my students and I often go on new adventures through literature. Traveling can give you the opportunity to learn, influence and grow in various ways. 
                You can learn a lot from people of all different people and environments! I have traveled to about 10 different countries and have found that the experiences gained are like no other. 
                I found that seeking new experiences is a wonderful way to maximize opportunities in my life which is why I help others plan their dream trips!</p>
            </div>
            <img class="image_section" src="assets/Ashley.jpg"/>
          </div>

          <a name="Chantelle"></a>
          <div class="section image_then_text">
            <img class="image_section" src="assets/Chantelle.png"/>
            <div class="text_section_right">
              <h1 class="text_section_title">Chantelle Patel</h1>
              <p>I graduated with from Quinnipiac Schools of Business with a Bachelor of Science degree in Marketing and Public Relations. 
                I love working with clients and showcasing their best skills. My passions include traveling, experiencing different people 
                and cultures and being able to promote those through various social media platforms. </p>
            </div>
          </div>

          <a name="Emmit"></a>
          <div class="section_grey_light text_then_image">
            <div class="text_section_left">
              <h1 class="text_section_title">Emmit Parubrub</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus tempus nisi eget congue. Vivamus id nisi erat. Curabitur sit amet volutpat risus. Donec sit amet cursus est. Vivamus facilisis sem lorem, eu lacinia eros vulputate sit amet. Donec dignissim posuere orci, sed tempus neque. Nullam quis elementum ante, posuere euismod neque. Mauris tellus risus, tempor vel ante eu, venenatis vestibulum urna. Ut eu aliquam nibh. Suspendisse potenti. Sed enim nibh, tristique eu ligula ac, imperdiet convallis ipsum.
                  Pellentesque vel luctus arcu. Suspendisse vitae nibh metus. Curabitur id velit nec magna dignissim imperdiet. Fusce vitae augue elit. Vivamus sagittis pulvinar massa vitae sagittis. Pellentesque ac lacinia lectus, sit amet fermentum turpis. Ut sit amet congue tellus. Pellentesque consectetur lectus et mollis ultricies. Aliquam cursus erat id commodo facilisis. Phasellus velit nisl, condimentum vitae tincidunt in, venenatis nec nisl.</p>
            </div>
            <img class="image_section" src="assets/Emmit.png"/>
          </div>
    </div>
    )
  }
}
export default HomeLight