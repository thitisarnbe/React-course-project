console.log('App.js is running!!!')
const appRoot = document.getElementById('app');

const app = {
    'title':'Indecistion app',
    'subtitle':'Put your life in the hands of a computer.',
    'options':[
        // 'One',
        // 'Two'
    ]
}

//JSX - Javascript XML

const onFormSummit = (e) =>{
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const removeAll = () =>{
    app.options = [];
    render();
};

const onMakeDecistion = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    console.log(option);
};

const render = () =>{
    const template =  (
        <div>
            <h1>{app.title}</h1>
            {(app.subtitle) && <p>{app.subtitle}</p>}
            <p>{(app.options.length > 0) ? 'Here are your option : '+app.options.length :'No options'}</p>
            <ol>
                {
                    app.options.map((option,key) => {
                        return <li key={option}>{ option}</li>
                    })
                }
            </ol> 
            <button disabled={app.options.length === 0 && true} onClick={onMakeDecistion}>What shold I do?</button>&nbsp;
            <button onClick={removeAll}>Remove all</button>
            <br/><br/>
            <form onSubmit={onFormSummit}>
                <input type="text" name="option"/>&nbsp;
                <button type="submit">Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template,appRoot);
}

render();


// var user = {
//     name:'Thitisarn Chuechun',
//     age:12,
//     location: "Chiang mai"
// };

// function getLocation(location){
//     if(location){
//         return <p>Location: {location}</p>;
//     }
// } 

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );


// ReactDOM.render(templateTwo,appRoot);  
