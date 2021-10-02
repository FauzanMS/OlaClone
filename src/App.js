import './App.css';
import Navbar from './Components/Navbar';
import FirstCard from './Components/FirstCard';
import SecondPart from './Components/SecondPart';
import ThirdCard from './Components/ThirdCard';
import FourthCard from './Components/FourthCard';
import FifthCard from './Components/FifthCard';

function App() {
  return (
    <div className="App">
         <Navbar/>
         <FirstCard/>
         <SecondPart/>
         <ThirdCard/>
         <FourthCard/>
         <FifthCard/>
    </div>
  );
}

export default App;
