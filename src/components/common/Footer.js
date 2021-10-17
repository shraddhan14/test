import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer-info">
       
                | Developed by{" shraddha "}
                <a target="_blank" href=" ">
                Shraddha Narawade
                </a>{" "}
                | Powered by{" "}
                <a target="_blank" href="https://reactjs.org/">
                React js
                </a>
            </div>
        );
    }
}

export default Footer;