import React,{useState} from 'react';
import Products from './Products';

const App = () => {
  const [search,setSerach] = useState("");
  const [data,setData] = useState([]);
  const YOUR_APP_ID = "fb68c2bb";
  const YOUR_APP_KEY = "ddc45e9d42f700d79cd69595e1744448";

  const submitHandler = e =>{
  e.preventDefault();
  fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`)
    .then(response => response.json())
    .then(
    data => setData(data.hits))
}

 
  return (
    <div>
      <center>
        <h2>Food Recipe</h2><br/>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} 
          onChange={(e) => setSerach(e.target.value)}/><br/>
          <input type="submit" className="btn btn-primary" value="search"/>
        </form>
        {data.length>=1 ? <Products data={data} /> :null}
      </center>
      </div>
  )
} 

export default App