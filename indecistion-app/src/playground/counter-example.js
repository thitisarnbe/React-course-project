let countt = 0;
const addOne = () =>{
    console.log('addOne');
    countt++;
    renderCounterApp();
};

const minusOne = () =>{
    console.log('minusOne');
    countt--;
    renderCounterApp();
};

const reset = () =>{
    console.log('reset');
    countt = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () =>{
    const templateThree = (
        <div>
            <h1>Count: {countt}</h1>
            <button className="button" onClick={addOne}>+1</button>&nbsp;
            <button className="button" onClick={minusOne}>-1</button>&nbsp; 
            <button className="button" onClick={reset}>Reset</button>&nbsp;
        </div> 
    );

    ReactDOM.render(templateThree,appRoot);  
};

renderCounterApp();