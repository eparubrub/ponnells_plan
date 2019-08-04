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
      <div class="body">
      <NavBarLight/>
      <img class="background-image" src="assets/Hawaii.jpg"/>
          
          <a name="howitworks"></a>
          <div class="section">
            <div class="text_section_left">
              <h1 class="text_section_title">How it Works</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus tempus nisi eget congue. Vivamus id nisi erat. Curabitur sit amet volutpat risus. Donec sit amet cursus est. Vivamus facilisis sem lorem, eu lacinia eros vulputate sit amet. Donec dignissim posuere orci, sed tempus neque. Nullam quis elementum ante, posuere euismod neque. Mauris tellus risus, tempor vel ante eu, venenatis vestibulum urna. Ut eu aliquam nibh. Suspendisse potenti. Sed enim nibh, tristique eu ligula ac, imperdiet convallis ipsum.
                  Pellentesque vel luctus arcu. Suspendisse vitae nibh metus. Curabitur id velit nec magna dignissim imperdiet. Fusce vitae augue elit. Vivamus sagittis pulvinar massa vitae sagittis. Pellentesque ac lacinia lectus, sit amet fermentum turpis. Ut sit amet congue tellus. Pellentesque consectetur lectus et mollis ultricies. Aliquam cursus erat id commodo facilisis. Phasellus velit nisl, condimentum vitae tincidunt in, venenatis nec nisl.</p>
            </div>
            <img class="image_section_right" src="assets/meeting.jpg"/>
          </div>

          <a id="booking"></a>
          <div class="section_grey_light">
            <div class="calendly">
              <div 
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/username"
                    style={{ minWidth: '320px', height: '750px' }} />
            </div>
          </div>

          <a name="reviews"></a>
          <div class="section">
              <div class="text_section_right">
                  <h1 class="text_section_title">Reviews/Social Media</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus tempus nisi eget congue. Vivamus id nisi erat. Curabitur sit amet volutpat risus. Donec sit amet cursus est. Vivamus facilisis sem lorem, eu lacinia eros vulputate sit amet. Donec dignissim posuere orci, sed tempus neque. Nullam quis elementum ante, posuere euismod neque. Mauris tellus risus, tempor vel ante eu, venenatis vestibulum urna. Ut eu aliquam nibh. Suspendisse potenti. Sed enim nibh, tristique eu ligula ac, imperdiet convallis ipsum.
                      Pellentesque vel luctus arcu. Suspendisse vitae nibh metus. Curabitur id velit nec magna dignissim imperdiet. Fusce vitae augue elit. Vivamus sagittis pulvinar massa vitae sagittis. Pellentesque ac lacinia lectus, sit amet fermentum turpis. Ut sit amet congue tellus. Pellentesque consectetur lectus et mollis ultricies. Aliquam cursus erat id commodo facilisis. Phasellus velit nisl, condimentum vitae tincidunt in, venenatis nec nisl.</p>
                </div>
              <div class="instagram_feed">
                <link href="https://assets.juicer.io/embed.css" media="all" rel="stylesheet" type="text/css" />
                <ul class="juicer-feed" data-feed-id="emmitario"><h1 class="referral"></h1></ul>
             </div>
             
          </div>

          <a name="Ashley"></a>
          <div class="section_grey_light">
            <div class="text_section_left">
              <h1 class="text_section_title">Ashley P. Walker</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus tempus nisi eget congue. Vivamus id nisi erat. Curabitur sit amet volutpat risus. Donec sit amet cursus est. Vivamus facilisis sem lorem, eu lacinia eros vulputate sit amet. Donec dignissim posuere orci, sed tempus neque. Nullam quis elementum ante, posuere euismod neque. Mauris tellus risus, tempor vel ante eu, venenatis vestibulum urna. Ut eu aliquam nibh. Suspendisse potenti. Sed enim nibh, tristique eu ligula ac, imperdiet convallis ipsum.
                  Pellentesque vel luctus arcu. Suspendisse vitae nibh metus. Curabitur id velit nec magna dignissim imperdiet. Fusce vitae augue elit. Vivamus sagittis pulvinar massa vitae sagittis. Pellentesque ac lacinia lectus, sit amet fermentum turpis. Ut sit amet congue tellus. Pellentesque consectetur lectus et mollis ultricies. Aliquam cursus erat id commodo facilisis. Phasellus velit nisl, condimentum vitae tincidunt in, venenatis nec nisl.</p>
            </div>
            <img class="image_section_right" src="assets/Ashley.jpg"/>
          </div>

          <a name="Chantelle"></a>
          <div class="section">
            <div class="text_section_right">
              <h1 class="text_section_title">Chantelle Patel</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus tempus nisi eget congue. Vivamus id nisi erat. Curabitur sit amet volutpat risus. Donec sit amet cursus est. Vivamus facilisis sem lorem, eu lacinia eros vulputate sit amet. Donec dignissim posuere orci, sed tempus neque. Nullam quis elementum ante, posuere euismod neque. Mauris tellus risus, tempor vel ante eu, venenatis vestibulum urna. Ut eu aliquam nibh. Suspendisse potenti. Sed enim nibh, tristique eu ligula ac, imperdiet convallis ipsum.
                  Pellentesque vel luctus arcu. Suspendisse vitae nibh metus. Curabitur id velit nec magna dignissim imperdiet. Fusce vitae augue elit. Vivamus sagittis pulvinar massa vitae sagittis. Pellentesque ac lacinia lectus, sit amet fermentum turpis. Ut sit amet congue tellus. Pellentesque consectetur lectus et mollis ultricies. Aliquam cursus erat id commodo facilisis. Phasellus velit nisl, condimentum vitae tincidunt in, venenatis nec nisl.</p>
            </div>
            <img class="image_section_left" src="assets/Chantelle.png"/>
          </div>

          <a name="Emmit"></a>
          <div class="section_grey_light">
            <div class="text_section_left">
              <h1 class="text_section_title">Emmit Parubrub</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus tempus nisi eget congue. Vivamus id nisi erat. Curabitur sit amet volutpat risus. Donec sit amet cursus est. Vivamus facilisis sem lorem, eu lacinia eros vulputate sit amet. Donec dignissim posuere orci, sed tempus neque. Nullam quis elementum ante, posuere euismod neque. Mauris tellus risus, tempor vel ante eu, venenatis vestibulum urna. Ut eu aliquam nibh. Suspendisse potenti. Sed enim nibh, tristique eu ligula ac, imperdiet convallis ipsum.
                  Pellentesque vel luctus arcu. Suspendisse vitae nibh metus. Curabitur id velit nec magna dignissim imperdiet. Fusce vitae augue elit. Vivamus sagittis pulvinar massa vitae sagittis. Pellentesque ac lacinia lectus, sit amet fermentum turpis. Ut sit amet congue tellus. Pellentesque consectetur lectus et mollis ultricies. Aliquam cursus erat id commodo facilisis. Phasellus velit nisl, condimentum vitae tincidunt in, venenatis nec nisl.</p>
            </div>
            <img class="image_section_right_emmit" src="assets/Emmit.png"/>
          </div>
    </div>
    )
  }
}
export default HomeLight