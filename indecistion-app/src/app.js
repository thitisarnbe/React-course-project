class IndecistionApp extends React.Component{
    render(){
        const title = 'Indecistion';
        const subtitle = 'Put your life in the hand of a computer.';
        const options= ['First','Secoud','Third'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options} />
                <AddOptions /> 
            </div>
        );
    }
}

class Header extends React.Component{
    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

//Add Remove All Buttons
 
class Action extends React.Component{
    handlePick(){
        alert('handlePick');
    }
    render() {
        return(
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
} 

class Options extends React.Component{
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll(){
        console.log(this.props.options);
    }
    render() {
        return(
            <div>
                <p>{(this.props.options.length > 0) ? 'Here are your option : '+this.props.options.length :'No options'}</p>
                <button onClick={this.handleRemoveAll}>Remove All.</button>
                <ol>
                    {
                        this.props.options.map((option) => <Option key={option} optionText={option} />)
                    }
                </ol> 
            </div> 
        ); 
    }
}

class Option extends React.Component{
    render() {
        return(
            <li key={this.props.key}> 
                {this.props.optionText}
            </li>
        );
    }
}

class AddOptions extends React.Component{
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option){
            IndecistionApp.options.push(option);
            e.target.elements.option.value = '';
            IndecistionApp.render();
        }
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>&nbsp;
                    <button type="submit">Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecistionApp />,document.getElementById('app'));