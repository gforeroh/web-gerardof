import React, { Component } from 'react';
import ListSocialMedia from './ListSocialMedia';
import './assets/css/style.css';
import LogoX1 from './assets/img/logo-gf.png';
import LogoX2 from './assets/img/logo-gf@2x.png';

class ComingSoon extends Component {    
    render(){
        const enddate = "2018/04/01 00:00:00";
        return(
            <section className="no-padding full-screen cover-background">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="position-relative full-screen">
                                <div className="slider-typography text-center xs-overflow-auto">
                                    <div className="slider-text-middle-main padding-ten-tb">
                                        <div className="slider-text-middle bg-black-opacity xs-padding-15px-all">
                                            <div className="margin-eight-bottom xs-margin-30-bottom"><img src={LogoX1} data-at2x={LogoX2} alt="" /></div>
                                            <h6 className="font-weight-300 text-white margin-30px-bottom text-decoration-line-through-deep-pink width-45 center-col sm-width-60 xs-width-100">Algo impresionante está en proceso</h6>
                                            <div data-enddate = {enddate} className="countdown text-center text-white counter-box-5"></div>
                                            <div className="col-md-12 text-center social-icon-style-10 margin-six-top xs-margin-30px-top xs-no-padding">
                                                <ListSocialMedia />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ComingSoon;