class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count:0
        };
    }
    componentDidMount(){
        try{
            const stringCount = localStorage.getItem('count');
            const count =parseInt(stringCount,10);

            if(!isNaN(count)){ 
                this.setState(()=>({count}))
            }
        }catch(e){

        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !==  this.state.count){
            localStorage.setItem('count', this.state.count); 
        }
    }
    handleAddOne(){
        this.setState((prevState)=>{
            return{
                count:prevState.count+1
            }
        });
    }
    handleMinusOne(){
        this.setState((prevState)=>{
            return{
                count:prevState.count-1
            }
        });
    }
    handleReset(){
        this.setState((prevState)=>{
            return{
                count:0
            }
        });
    }
    render(){
        return(
            <div>
                {this.state.name}
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>&nbsp;
                <button onClick={this.handleMinusOne}>-1</button>&nbsp; 
                <button onClick={this.handleReset}>Reset</button>&nbsp;
            </div> 
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let countt = 0;
// const addOne = () =>{
//     console.log('addOne');
//     countt++;
//     renderCounterApp();
// };

// const minusOne = () =>{
//     console.log('minusOne');
//     countt--;
//     renderCounterApp();
// };

// const reset = () =>{
//     console.log('reset');
//     countt = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () =>{
//     const templateThree = (
//         <div>
//             <h1>Count: {countt}</h1>
//             <button className="button" onClick={addOne}>+1</button>&nbsp;
//             <button className="button" onClick={minusOne}>-1</button>&nbsp; 
//             <button className="button" onClick={reset}>Reset</button>&nbsp;
//         </div> 
//     );

//     ReactDOM.render(templateThree,appRoot);  
// };

// renderCounterApp();