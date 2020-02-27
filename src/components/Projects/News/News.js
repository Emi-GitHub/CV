import React, { Component } from 'react';
import { connect } from 'react-redux';
import './News.css';

class News extends Component {
    render() {
        return (
            <div className={this.props.theme} style={{color:this.props.name}}>
                <div className="news">
                    <div className="news-header">Click on link bellow: <br/> <br/> <br/>
                        <div className="pointer">-></div>
                        <div className="news-link">
                            <a 
                                href="https://github.com/Emi-GitHub/News-Task1" 
                                target="_blank" rel="noopener noreferrer"
                            >
                                News-React
                            </a>
                        </div>  <br/> <br/>
                        <div className="pointer">-></div>
                        <div className="news-link">
                        <a
                            href="https://github.com/Emi-GitHub/News-Task1" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            News-React-Redux
                        </a> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        theme: state.theme,
        name: state.name,
    }
}
export default connect(mapStateToProps)(News);
