import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';
import '../styling/Index.css';
import '../styling/main.css';

class Main extends React.Component {
    incrementOnClick = () => {
        const newCount = this.props.count + 1;
        this.props.increment(newCount);
    }

    decrementOnClick = () => {
        const newCount = this.props.count -1;
        this.props.decrement(newCount);
    }

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
                            <div className="sec3-a1">This a sample project test</div>
                            <p className="sec3-a2">This a sample project test</p>
                            <p className="sec3-a3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et egestas pretium tincidunt tellus massa pharetra nulla. Rhoncus morbi dui, enim vulputate feugiat vitae amet pellentesque.</p>
                        </div>
                        <div className="sec3-b flex flex-jc-ct flex-ai-ct">
                            <div className="sec3-b1 flex">
                                <div className="num">{this.props.count}</div>
                                <div className="btn-cont flex flex-ai-ct">
                                    <button className="cnt-btn" onClick={this.incrementOnClick}>Add</button>
                                    <button className="cnt-btn" onClick={this.decrementOnClick}>Minus</button>
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

const mapStateToProps = (state, ownProps) => {
    return {
        count: state.count.count
    };
};

export default connect(mapStateToProps, {increment, decrement})(Main);
