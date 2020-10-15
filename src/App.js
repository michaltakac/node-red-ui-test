import React from "react";
import "./App.css";

import TestBootstrap from "./components/TestBootstrap";

// Import uibuilder enabled component
import UserData from "./scenes/UserData";

function App() {
  return (
    <div className="App">
      <TestBootstrap />

      {/* THIS IS THE UIBUILDER COMPONENT */}
      <UserData title="User Data"></UserData>
    </div>
  );
}

export default App;
