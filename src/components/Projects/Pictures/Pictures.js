import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './Pictures.css';
import { connect } from 'react-redux';

class Pictures extends Component {
    state = { 
        images: [] 
    }
    onSearchSubmit = async term => {
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            params: {query: term},
            headers: {Authorization: 'Client-ID e6b18936be74cf8286eea003c9317815e2272b20f8e720be55dbada2ab5af6da'}
        });
        this.setState({
            images: response.data.results
        });
    }
    render() {
        return (
            <div className="pictures-div" style={{backgroundColor:this.props.theme}}>
                <div className="main-div">
                    <div className="my-header pictures-link" style={{color:this.props.name}}>
                        To see code click on link: 
                        <a href="https://github.com/Emi-GitHub/Udemy-React/tree/pics"> Search pictures</a> 
                        <br/> <br/>
                    </div>
                </div>
				<div className="ui container">
                    <div className="ui divider"></div>
                    <SearchBar onSearchSubmit={this.onSearchSubmit} />              
                    <ImageList images={this.state.images} /> 
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
export default connect(mapStateToProps)(Pictures);
