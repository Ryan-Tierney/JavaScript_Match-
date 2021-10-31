import "./App.css";
import Images from "./Images";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState(initialState, [...Images]);
  return (
    <div>
      <div className='board'>
        <div className='card-outer'>
          <div className='card'>
            <div className='front'></div>
            <div className='back'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
