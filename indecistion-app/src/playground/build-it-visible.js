let app = {
    visibility:false,
    texts:{
        'hidden':'Hide detail',
        'visible':'Show detail',
    }

};
const toggleVisibility = ()=>{
    app.visibility = !app.visibility;
    render();
};


const render = () => {
  const jsx = (
    <div>
        <h1>Visibility Toggle</h1>
        <button onClick={toggleVisibility}>Toggle it</button>
        <p>{(app.visibility === true)?app.texts.visible:app.texts.hidden}</p>
    </div>

  );

  ReactDOM.render(jsx,document.getElementById('app'));
};

render();