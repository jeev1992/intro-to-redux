import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {useSelector, useDispatch} from "react-redux";
import {
  decrement,
  increment,
  reset,
  logIn,
  logOut,
  submit
} from './actions/index'


//dispatch, state-> counter and auth to display in JSX, actions
function App() {
  //Set input state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const counter = useSelector((state) => state.counterReducer)
  const auth = useSelector((state) => state.authReducer)
  const formData = useSelector((state) => state.formReducer)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2>Form reducer</h2>
      <form onSubmit={() => dispatch(submit({name: name, email: email}))}>
        <input type = "text" name = "name" value={name} onChange = {(event) => setName(event.target.value)}/>
        <input type = "email" name = "email" value= {email} onChange = {(event) => setEmail(event.target.value)} />
        <input type = "submit" value = "Submit" />
      </form>
      {formData.name && alert(`Form data is- Name: ${formData.name} and Email- ${formData.email}`)}

      <h1>Redux project</h1>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>

      <h2>For logged in users only</h2>
      <p>Log in to see a secret!!!</p>
      <button onClick={() => dispatch(logIn())}>Login</button>
      <button onClick={() => dispatch(logOut())}>Logout</button>
      {auth ? (<div>
        <p>If you know 50% of Redux, you're a pro!!</p>
        </div>) : ("")}
    </div>
  );
}

export default App;
