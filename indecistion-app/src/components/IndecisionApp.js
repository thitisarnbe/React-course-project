import React from 'react';
import ReactDOM from 'react-dom';
 
import Action from './Action';
import AddOptions from './AddOptions';
import Decistion from './Decistion';
import Header from './Header';
import Options from './Options';
import Option from './Option';
import OptionModal from './OptionModal'; 
 
export default class IndecisionApp extends React.Component{

    state = {
        options:[],
        decision_txt:"",
        selectedOption:undefined   
    }

    handleDeleteOptions = () =>{
        this.setState(()=>({
            options:[]
        }));
    }
    handleClearSelectedOptions = () =>{
        this.setState(()=>({
            selectedOption:undefined   
        }));
        this.handleDeleteOptions();
    }
    handleDeleteOption = (optionToRemove) =>{
        this.setState((prevState)=>({
            options:prevState.options.filter((option)=>{
                return optionToRemove !== option;
            })
        }));
    }
    handlePickOptions = () =>{
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(()=>({
            selectedOption:option   
        }));
    }
    handleAddOption = (option) =>{
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }

        this.setState((prevState)=>({
            options: prevState.options.concat([option])
        }));
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
     
            if(options){
             this.setState(()=>({options}));
            } 
        }catch(e){
            //
        }
    }
    componentWillUpdate(prevProps,prevState){
        // if(prevProps.options.length !== this.state.options.length){
        //     const json =JSON.stringify(this.state.options)
        //     localStorage.setItem('options',json);
        // }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount!');
    }

    render(){
        const title = 'Indecistion';
        const subtitle = 'Put your life in the hand of a computer.';

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePickOptions={this.handlePickOptions}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOptions handleAddOption ={this.handleAddOption}/> 
                {/* <Decistion decision_txt={this.state.decision_txt} /> */}
                <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOptions={this.handleClearSelectedOptions}/>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));