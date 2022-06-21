import Card from './components/card'
import './App.css';

function App() {
  const obj = {
    title : "title",
    txt1: "txt1", 
    txt2: "txt2",
    txt3: "txt3" 
  }
  return (
    <div className="App">
      <Card txt={obj}/>
    </div>
  );
}

export default App;
