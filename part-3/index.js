
const Person = (props) => {
    let shortName ;
    if(props.name.length > 8){
        shortName = props.name.slice(0,7);
    } else {
        shortName = props.name;
    }

    let person = (
        <div>
        <p>
            Learn some information about this person
        </p>
        <p> {shortName} | {props.age}</p>
        <h3> {props.age > 17 ? "Go Vote" : "Can't vote yet"}</h3>
        <p>Hobbies include:</p>
        <ul>
            {props.hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
        </div>
    )

    return person
}

// further studies
const Button = (props) => {
    const styles = {
        "backgroundColor" : props.bgColor,
        "border-radius" : "4px",
        "width" : "200px",
        "height" : "75px"

    }
    let button = (
        <span>
            <a href={props.link}>
                <button style={styles}>
                        {props.button}
                        </button>
                        </a>
        </span>
    );
    return button;
}

const App = () => {
    return (
<div>
    <Person name="bob" age="50" hobbies={["cycling", "surfing", "netflix and chilling"]} />
    <Button bgColor="blue" link="https://google.com" button="Button" />
    <Person name="Andreilovski" age="70" hobbies={["drinking", "smoking", "gamlbing", "extortion"]} />
    <Button bgColor="red" link="https://google.com" button="Google" />

    <Person name="Billy D Williams" age="17" hobbies={["Flying", "Fighting", "Fishing"]} />
    <Button bgColor="white" link="https://google.com" button="Another button" />


</div>
    )
}






ReactDOM.render(<App />, document.getElementById("root"));