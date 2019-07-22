import React, { Component } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
// import Navbar from './components/NavBar';

class App extends Component {
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
              <div class="text_section_middle">
                <h1 class="text_section_title">"Insert Calendy Here"</h1>
              </div>
            </div>

            <a name="reviews"></a>
            <div class="section">
              <div class="text_section_middle">
                <h1 class="text_section_title">"Insert Reviews Here"</h1>
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

            {/* <div class="section"> */}

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
