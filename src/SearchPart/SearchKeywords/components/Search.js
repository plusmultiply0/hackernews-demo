import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tmpInput: ''
        };
        this.setInput = this.setInput.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    setInput(event){
        this.setState({
            tmpInput:event.target.value
        })
    }

    clearInput(){
        this.setState({
            tmpInput:''
        })
    }

    render() {
        const {tmpInput}=this.state;
        // 
        const {searchValue}=this.props;
        return (
            <div className="search">
                <input onChange={this.setInput} value={tmpInput}/>
                <button className="submit" onClick={searchValue}>search</button>
                <button className="cancel" onClick={this.clearInput}>cancel</button>
            </div>
        )
    }
}

export default Search;