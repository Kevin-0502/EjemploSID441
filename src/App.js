import './App.css';
import { Button } from 'reactstrap';
import CardExample from './CardExample';
import CaroosuelExample from './CaroosuelExample';


function App() {
  return (
    <div >
      <CaroosuelExample/>
      <div className='d-flex flex-row'>
        <CardExample/>
        <CardExample/>
        <CardExample/>
        <CardExample/>
        <CardExample/>
      </div>
    </div>
  );
}

export default App;
