// stateless functional component


class IndecistionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOptions = this.handlePickOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options:props.options,
            decision_txt:"" 
        }
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
    componentDidUpdate(prevProps,prevState){
        if(prevProps.options.length !== this.state.options.length){
            const json =JSON.stringify(this.state.options)
            localStorage.setItem('options',json);
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount!');
    }
    handleDeleteOptions(){
        this.setState(()=>({
            options:[]
        }));
    }
    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>({
            options:prevState.options.filter((option)=>{
                return optionToRemove !== option;
            })
        }));
    }
    handlePickOptions(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(()=>({
            decision_txt:option
        }));
    }
    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }

        this.setState((prevState)=>({
            options: prevState.options.concat([option])
        }));
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
                <Decistion decision_txt={this.state.decision_txt} />
            </div>
        );
    }
}

IndecistionApp.defaultProps = {
    
}


const Decistion = (props) =>{
    return(
        <div>
            {props.decision_txt && (
                <p>{props.decision_txt}</p>
            )}
        </div>
    );
};


// class Decistion extends React.Component{
//     render() {
//         return(
//             <div>
//                 {this.props.decision_txt && (
//                     <p>{this.props.decision_txt}</p>
//                 )}
//             </div>
//         );
//     }
// }

const Header = (props) =>{
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

Header.defaultProps = {
    title:'Some default'
}

// class Header extends React.Component{
//     render() {
//         return(
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

//Add Remove All Buttons
const Action = (props) =>{
    return(
        <div> 
            <button onClick={props.handlePickOptions} disabled={!props.hasOptions}>What should I do?</button>
        </div>
    );
};

// class Action extends React.Component{
//     render() {
//         return(
//             <div> 
//                 <button onClick={this.props.handlePickOptions} disabled={!this.props.hasOptions}>What should I do?</button>
//             </div>
//         );
//     }
// } 

const Options = (props) =>{
    return(
        <div>
            <p>{(props.options.length > 0) ? 'Here are your option : '+props.options.length :'No options'}</p>
            <button onClick={props.handleDeleteOptions}>Remove All.</button>
            <ol>
                {
                   props.options.map((option) => (
                        <Option 
                            key={option} 
                            optionText={option} 
                            handleDeleteOption={props.handleDeleteOption}
                        />
                   ))
                }
            </ol> 
        </div> 
    ); 
};
// class Options extends React.Component{
//     render() {
//         return(
//             <div>
//                 <p>{(this.props.options.length > 0) ? 'Here are your option : '+this.props.options.length :'No options'}</p>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All.</button>
//                 <ol>
//                     {
//                         this.props.options.map((option) => <Option key={option} optionText={option} />)
//                     }
//                 </ol> 
//             </div> 
//         ); 
//     }
// }

const Option = (props) =>{
    return(
        <li key={props.key}> 
            {props.optionText}
            &nbsp;<button
             onClick={(e)=>{
                props.handleDeleteOption(props.optionText)
             }}
            >
                Remove
            </button>
        </li>
    );
};

// class Option extends React.Component{
//     render() {
//         return(
//             <li key={this.props.key}> 
//                 {this.props.optionText}
//             </li>
//         );
//     }
// }

class AddOptions extends React.Component{
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

const User = (props) =>{
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

ReactDOM.render(<IndecistionApp />,document.getElementById('app'));