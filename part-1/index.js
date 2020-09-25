
const CompOne = () => (<h1>My very first componnent</h1>)

const CompTwo = (props) => {
    return (<p> My name is {props.name}</p>)
}

const App = () => {
    return  ( <div>
                <CompOne/>
                <CompTwo name="Brandon"/>
            </div>
            )
}

ReactDOM.render(<App />, 
    document.getElementById("root"));