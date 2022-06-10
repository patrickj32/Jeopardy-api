import './App.css';
import JeopardyWithHooks from './componets/JeopardyWithHooks';
// import FormTest from './componets/FormTest';
// import RefTest from "./componets/RefTest.js";
import Jeopardy from "./componets/Jeopardy.js" 


function App() {
  return (
    <div className="App">
      {/* <RefTest/> */}
       <Jeopardy />
       {<JeopardyWithHooks />}
      {/* <FormTest /> */}
    </div>
  );
}

export default App;