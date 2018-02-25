class VisibilityToggle extends React.Component{
    constructor(){
        super();
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility:false,
        }
    }
    toggleVisibility(){
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>Toggle it</button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. There are some details you can now see!</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));


// let app = {
//     visibility:false,
//     texts:{
//         'hidden':'Hide detail',
//         'visible':'Show detail',
//     }

// };
// const toggleVisibility = ()=>{
//     app.visibility = !app.visibility;
//     render();
// };


// const render = () => {
//   const jsx = (
//     <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggleVisibility}>Toggle it</button>
//         <p>{(app.visibility === true)?app.texts.visible:app.texts.hidden}</p>
//     </div>

//   );

//   ReactDOM.render(jsx,document.getElementById('app'));
// };

// render();