import React, { Component } from 'react';
import './App.css'
import './components/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
// import Navbar from './components/NavBar';

class App extends Component {
  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
    const script2 = document.createElement('script');
    script2.setAttribute('src',  'https://instawidget.net/js/instawidget.js?u=a95ea422a31148659ed6f1ea83ea84720e7942fc7b4f4811f88505372a865bbe&width=300px');
    head.appendChild(script);
    head.appendChild(script2);
  }

    render() {
      return (
        <div>
        <NavBar/>
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

            <a name="booking"></a>
            <div class="section_grey">
              <div class="calendly">
                <div 
                      className="calendly-inline-widget"
                      data-url="https://calendly.com/username"
                      style={{ minWidth: '320px', height: '750px' }} />
              </div>
            </div>

            <a name="reviews"></a>
            <div class="section">
              <div class="text_section_middle">
              <script language="javascript" src="http://i1.inwidgets.com/1-ponnellsplan.js"></script>
               </div>
            </div>

            <a name="ashley"></a>
            <div class="section_grey">
              <div class="text_section_right">
                <h1 class="text_section_title">Ashley P. Walker</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus tempus nisi eget congue. Vivamus id nisi erat. Curabitur sit amet volutpat risus. Donec sit amet cursus est. Vivamus facilisis sem lorem, eu lacinia eros vulputate sit amet. Donec dignissim posuere orci, sed tempus neque. Nullam quis elementum ante, posuere euismod neque. Mauris tellus risus, tempor vel ante eu, venenatis vestibulum urna. Ut eu aliquam nibh. Suspendisse potenti. Sed enim nibh, tristique eu ligula ac, imperdiet convallis ipsum.
                    Pellentesque vel luctus arcu. Suspendisse vitae nibh metus. Curabitur id velit nec magna dignissim imperdiet. Fusce vitae augue elit. Vivamus sagittis pulvinar massa vitae sagittis. Pellentesque ac lacinia lectus, sit amet fermentum turpis. Ut sit amet congue tellus. Pellentesque consectetur lectus et mollis ultricies. Aliquam cursus erat id commodo facilisis. Phasellus velit nisl, condimentum vitae tincidunt in, venenatis nec nisl.</p>
              </div>
              <img class="image_section_left" src="assets/Ashley.jpg"/>
            </div>

      </div>
        // <Router>
        // <div>
        //   <NavBar/>
        //   <Route exact path="/" component={Home} />
        //   <Route path="/about" component={About} />
        //   <Route path="/news" component={News} />
        // </div>
        // </Router>
      );
    }
}
export default App;
