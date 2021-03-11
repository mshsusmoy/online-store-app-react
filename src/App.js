import logo from './logo.svg';
import './App.css';
import Greet from './Component/Greet'
import Welcome from './Component/Welcome'
import Hello from './Component/Hello'
import Message from './Component/Message'
import Counter from './Component/Counter'

function App() {
  return (
    <div className="App">
      <Counter/>
      {/* <Message/> */}
      {/* <Greet name='One'> 
        <p>This is One's Children</p>
      </Greet>
      <Greet name='Two'>
        <button>This is Two's Children</button>
      </Greet>
      <Greet name='Three'>
        <p>This is Three's Children</p>
      </Greet>
      <Welcome name='One'>
        <p>This is Class Component One's Children</p>
      </Welcome>
      <Welcome name='Two'>
        <button>This is Class Component Two's Children</button>
      </Welcome>
      <Welcome name='Three'>
        <p>This is Class Component Three's Children</p>
      </Welcome> */}
      {/* <Hello/> */}
    </div>
  );
}

export default App;
