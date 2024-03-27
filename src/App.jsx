import { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("");
  const [interests, setInterests] = useState([]);
  const [updates, setUpdates] = useState("");
  const [comments, setComments] = useState("");
  const [formData, setFormData] = useState(false);

  const interestsHandler = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((interest) => interest !== value));
    }
  };

  const formHandler = (event) => {
    event.preventDefault();

    if(interests && updates){
      setFormData(true)
    }
    
    
  }

  return (
    <main>
      <h1>Subscription Form</h1>
      <form onSubmit={formHandler}>
        <label>Full Name: </label>
        <input required onChange={(event) => setName(event.target.value)} />
        <br /><br/>
        
        <label>Email: </label>
        <input required type="email" onChange={(event) => setEmail(event.target.value)} />
        <br /><br/>

        <label>Subscription Plan: </label>
        <select required value={plan} onChange={(event) => setPlan(event.target.value)}>
          <option value=''>Select Plan</option>
          <option value='Basic'>Basic</option>
          <option value='Premium'>Premium</option>
          <option value='Ultimate'>Ultimate</option>
        </select>
        <br/> <br/>
        
        <label>Interests: </label>
        <br />
        <input type="checkbox" onChange={interestsHandler} value="Technology" />
        Technology
        <br />
        <input type="checkbox" onChange={interestsHandler} value="Fitness" />
        Fitness
        <br />
        <input type="checkbox" onChange={interestsHandler} value="Cooking" />
        Cooking
        <br />
        <br />
        <br />
        <label>Want to recive Updates: </label>
        <br />
        <input
          type="radio"
          name="updates"
          value="yes"
          onChange={(event) => setUpdates(event.target.value)}
        />{" "}
        Yes <br />
        <input
          type="radio"
          name="updates"
          value="no"
          onChange={(event) => setUpdates(event.target.value)}
        />{" "}
        No
        <br />
        <br />
        <br />
        <label>Comments: </label>
        <br />
        <textarea
          rows="5"
          onChange={(event) => setComments(event.target.value)}
        ></textarea>
        <br />
        <br />
        <button type="submit">Subscribe</button>
      </form>
      {formData && <div>
        <p>Full Name: {name}</p>
        <p>Email: {email}</p>
        <p>Subscription Plan: {plan}</p>
        <p>Interests: {interests.join(', ')}</p>
        <p>Want to receive Updates: {updates}</p>
        <p>Comments: {comments === "" ? "none" : comments}</p>
      </div>}
    </main>
  );
}
