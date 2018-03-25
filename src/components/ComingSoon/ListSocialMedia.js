import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";




class ListSocialMedia extends Component {
    render(){
        return (
            <Router>
                <ul className="large-icon no-margin-bottom">
                    <li><Link className="facebook text-white" to="https://facebook.com/lalo.forero" target="_blank"><i className="fa fa-facebook"></i><span></span></Link></li>
                    <li><Link className="twitter text-white" to="http://twitter.com/LaloForero" target="_blank"><i className="fa fa-twitter"></i><span></span></Link></li>
                    <li><Link className="google text-white" to="https://plus.google.com/u/0/109171398409712986674" target="_blank"><i className="fa fa-google"></i><span></span></Link></li>            
                    <li><Link className="linkedin text-white" to="https://www.linkedin.com/in/gerardo-forero-635017142/" target="_blank"><i className="fa fa-linkedin "></i><span></span></Link></li>
                </ul>
            </Router>
        )
    }
}

export default ListSocialMedia;