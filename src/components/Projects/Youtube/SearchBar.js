import React, { Component } from 'react';
import './Youtube.css';
import { connect } from 'react-redux';

class SearchBar extends Component {
    state = { 
        term: '' 
    };
    onInputChange = event => { 
        this.setState({
            term: event.target.value
        });
    };
    onFormSubmit = event => {
        event.preventDefault(); 
        this.props.callMe(this.state.term);
    };
    render() {
        return (
            <div className="search bar ui segment" style={{backgroundColor:this.props.dot}}>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field" style={{color:this.props.name}}>
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        name: state.name,
        dot: state.dot
    }
}

export default connect(mapStateToProps)(SearchBar);
