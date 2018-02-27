import React from 'react';
import ReactDOM from 'react-dom';

export default class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error:undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        if(error){
            this.setState(() =>({error})); 
        }
        
        e.target.elements.option.value = '';
    }
    render() {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>&nbsp;
                    <button type="submit">Add Option</button>
                </form>               
            </div>
        );
    }
}