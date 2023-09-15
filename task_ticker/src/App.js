import "./App.css";
import Navbar from "./components/Navbar";

import TodoWrapper from "./components/TodoWrapper";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <TodoWrapper />
      </div>
    </>
  );
}

export default App;
