import React from 'react';
import Switch from "./components/Switch.jsx";
import Footer from "./components/Footer.jsx"
import List from "./components/List.jsx"
/* import NestedList from "./components/NestedList.jsx" */
/* import Organisation from "./components/Organisation.jsx" */
import './css/App.css';

function App() {

  return (
    <div className="App">
      <div className="container">
        <header>
          <p className="header-title">companion</p>
          <Switch/>
        </header>
        <List/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
