import './App.css';
import Month from './Month.js'
import MonthDropdown from './MonthDropdown';


//https://stackoverflow.com/questions/28868071/onchange-event-using-react-js-for-drop-down
//Using Kirk Strobeck's answer as a guide for the drop down

function App() {
  return (
    <div>
     <Month startDay="6" length="28"/>
     <MonthDropdown />
    </div>
  );
}

export default App;
