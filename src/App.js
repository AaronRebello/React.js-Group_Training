import './App.css';
import Basic from './components/Basic';
import BuiltItVisible from './components/BuiltItVisible';
import Counter2 from './components/Counter2';
import AddDeleteComponent from './components/AddDeleteComponent';
import Utils from './components/Utils'

function App() {
  return (
    <div className="App">
      <Counter2 />

       <Basic />
      {/* <BuiltItVisible/>  */}
      {/* <AddDeleteComponent /> */}
      {/* <Utils /> */}
    </div>
  );
}

export default App;
