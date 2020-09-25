const Tweet = (props) => {
let theTweet = (
<ul>
<li>{props.username}</li>
<li>{props.name}</li>
<li>{props.date}</li>
<li><p>{props.message}</p></li>

</ul>
);
return theTweet;
    
}

const App = () => {
   return (
       <div>
       <Tweet username="user" name="bob" date="8/1/20" message="Its a message~!1"/>
       <Tweet username="user2" name="bobby" date="8/2/20" message="Its another message~!12"/>
       <Tweet username="user3" name="bobikins" date="8/3/20" message="Its a message thrice~!123"/>
        </div>
   );
}

ReactDOM.render(<App />, 
    document.getElementById("root"));