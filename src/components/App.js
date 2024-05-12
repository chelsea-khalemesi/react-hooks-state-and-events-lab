
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import React, {useState} from "react";
import "../index.css"

function App() {
 const [darkMode, setDarkMode] = useState(false);

  // this will be used for the Dark Mode Toggle feature
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);

  };
 

  const appClass = darkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;