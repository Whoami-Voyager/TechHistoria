import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Timeline from './Components/Timeline';
import TimeDetails from './Components/TimeDetails';
import CreateEvent from './Components/CreateEvent';
import ErrorPage from './Components/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Timeline />} />
        <Route path='/history/:id' element={<TimeDetails />} />
        <Route path='/createhistory' element={<CreateEvent />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
