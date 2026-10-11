import "./App.css";
import { useState } from "react";

export default function App() {


// UseState Hook

const[isChecked, setIsChecked] =useState(true)
const[range, setRange] =useState(600)





  return (

     <div className="App">

      {/*Header*/}

      <header className="App-header">
        <h1>MemeViewer</h1>
        <p>Lustiges Bild für ein besseren Tag😀</p>
      </header>

      
{/* HAUPTBEREICH */}
<div className="Hauptbereich">


      {/*Bildbereich*/}

      <div className="Bildbereich">
      {isChecked && (
        <img
    className="Katzenbild"
    src= "https://cdnimg.bgt9.top/ID55922/2_WH_800x600px.webp"
    alt="Lustiges Katzenbild"
          style={{ width: `${range}px` }}
  />
      
)}
      </div>
    


<div className="Bedienung">

  {/*Checkbox*/
  }
   <label>
    Bild anzeigen
    </label> 

   <input
id = "Checkbox"
type="checkbox"
checked = {isChecked}
onChange={(e) => setIsChecked(e.target.checked)}> 
</input> 



{/*Schieberegler*/}

<label htmlFor="schieberegler">
  Bildgrösse: {range}px
</label>

<input
id = "schieberegler"
type= "range"
 min="0"
  max="800"
  step="100"
  value = {range}
  
  onChange={(e) => setRange(e.target.value)}
  >
</input>
</div>
</div>

{/*Footer*/}

<footer className="App-footer">
Powered by Memes & Chaos
</footer>
</div>
  );
}

