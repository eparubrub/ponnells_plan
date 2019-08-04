import React, { Component } from 'react';
import './NavBar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeClass: `normal`,
        };
    }
    componentDidMount(){
        window.addEventListener('scroll', () => {
            let activeClass = 'normal';
            if(window.scrollY > 300){
                activeClass = 'background';
            }
            this.setState({ activeClass });
        });
    }
    render() {
    return (
        <nav className={`navbar navbar-dark navbar-expand-sm fixed-top ${this.state.activeClass}`}>
            <a class="navbar-brand" href="#"><img class="logo" src="assets/PonellsPlanLogo.png"/></a>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link" href="howitworks">How it Works</a></li>
                    <li class="nav-item"><a class="nav-link" href="booking">Booking</a></li>
                    <li class="nav-item"><a class="nav-link" href="reviews">Reviews</a></li>
                    <li class="nav-item"><a class="nav-link" href="Ashley">Meet the Team</a></li>
                </ul>
        </nav>
        );
    }
}   
export default Navbar;