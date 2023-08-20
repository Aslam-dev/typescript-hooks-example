
import './App.css';
import UseStateComponent from './UseStateComponent';
import UseEffectComponent from './UseEffectComponent';
import UseContextComponent from './UseContextComponent';
import UseReducerComponent from './UseReducerComponent';
import UseRefComponent from './UseRefComponent';
function App() {
  return (
    <div>
      <h1>useRrf</h1>
      <UseRefComponent />
      <h1>useReducer</h1>
      <UseReducerComponent/> 
      <h1>useContext</h1>
      <UseContextComponent/>
      <h1>useEffect</h1>
      <UseEffectComponent />
      <h1>Use Stae</h1> 
      <UseStateComponent/>
        </div>
  );
}

export default App;
