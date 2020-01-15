import React from 'react';
import { connect } from 'react-redux';
import '../styling/Index.css';
import '../styling/main.css';

class Main extends React.Component {
    render() {
        return (
            <div className="swipe-cont">
                <div className="swipe-nav">
                    <div className="sw-nav-box nav-left"></div>
                    <div className="sw-nav-box nav-right"></div>
                </div>
                <div className="swipe-main">
                    <div className="sec1">
                        <div className="md-card"></div>
                        <div className="md-card"></div>
                        <div className="md-card flex flex-jc-ct flex-ai-ct">
                            <div className="circle"></div>
                        </div>
                        <div className="md-card"></div>
                        <div className="md-card"></div>
                    </div>
                    <div className="sec2 flex wrap">
                        <div className="sm-card"></div>
                        <div className="sm-card dkp"></div>
                        <div className="sm-card one"></div>
                        <div className="sm-card green"></div>
                        <div className="sm-card"></div>
                        <div className="sm-card lkp"></div>
                    </div>
                    <div className="sec3">
                        <div className="sec3-a">
                            <h5>This a sample project test</h5>
                            <p>This a sample project test</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et egestas pretium tincidunt tellus massa pharetra nulla. Rhoncus morbi dui, enim vulputate feugiat vitae amet pellentesque.</p>
                        </div>
                        <div className="sec3-b flex flex-jc-ct flex-ai-ct">
                            <div className="sec3-b1 flex">
                                <div className="num">2</div>
                                <div className="btn-cont flex flex-ai-ct">
                                    <button className="cnt-btn">Add</button>
                                    <button className="cnt-btn">Minus</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sec4 flex flex-ai-ct">
                        <div className="flex fit centered">
                            <div className="sec4-card big"></div>
                            <div className="sec4-card md"></div>
                            <div className="sec4-card sm"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Main);
