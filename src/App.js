import React from "react";
import Button from "./components/button";

function App() {
  return (
    <div>
      <h1>Super cool page</h1>
      <Button onClick={() => console.log("I was clicked")}>
        I am a button
      </Button>
    </div>
  );
}

export default App;
