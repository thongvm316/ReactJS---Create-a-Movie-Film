import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './SearchBar.css';

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
             value: ''
        }
    }

    timeout = null;

    doSearch = (e) => {
        e.persist()
        this.setState({
            value: e.target.value
        })
        clearTimeout(this.timeout) /// Có nó, khi gõ search, gõ xong đợi 500ms rồi chạy hàm, nếu ko có, trong lúc gõ search chưa gõ xong, đủ time 500ms nó chạy luôn
        this.timeout = setTimeout(() => {
            this.props.callback(this.state.value)
        }, 500)
    }

    render() {
        // console.log(this.props);
        return (
            <div className="rmdb-searchbar">
                <div className="rmdb-searchbar-content">
                    <FontAwesome className="rmdb-fa-search" name="search" size="2x"/>
                    <input 
                        type="text" 
                        className="rmdb-searchbar-input"
                        placeholder="Search"    
                        onChange={this.doSearch}
                        value={this.state.value}
                    />
                </div> 
            </div>
        );
    }
}

export default SearchBar;