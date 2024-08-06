import { useState } from "react"
import "./Search.css"
import Icon from "./icon.jpg"


function Search(){
const[userInput, setUserInput] = useState("");
const [data, setData] = useState({});


async function getSearch(){
    const response =  await fetch (`https://www.googleapis.com/customsearch/v1?key=AIzaSyAmDU00FdU-nK4xPMjTjxWgy_hQsvbF3ps&cx=d12334e16c19c4dda&q=${userInput}`)
    // console.log("This is the response", response)
    const jsonData = await response.json();
    // console.log("This is the json data", jsonData)
   setData(jsonData.items) 
   console.log(jsonData)  
}



function handleClick(event){
getSearch();
 event.preventDefault()
}

 return(
    <div>
      <div className="parent" >
      <div className="icon">
            <img src={Icon} alt="google"></img>
        </div>
    <form>
        <input value={userInput} onChange={ (e) => setUserInput(e.target.value)} type="text" placeholder="search"></input> <br></br>
        <button onClick={handleClick}>Search</button>
    </form>  
     </div> 
  

    <div className="result">
    {data && data.length > 0 ? (
          <div>
            {data.map((item, index) => (
              <div key={index}>
                <p className="result-1">{item.title}</p>
               <a href={item.link}>
               <p>{item.link}</p>
                </a>  
                <a href={item.displayLink}>
                  <p>{item.displayLink}</p>
                </a>
               <a href={item.formattedUrl}>
               <p>{item.formattedUrl}</p>
                </a> 
              <a href={item.htmlFormattedUrl}>
              <p>{item.htmlFormattedUrl}</p>
                </a>  
             
             
                
                
                </div>
            ))}
          </div>
        ) : (
          <p></p>
        )}
    </div>
    
    </div>
 )
}
export default Search;


