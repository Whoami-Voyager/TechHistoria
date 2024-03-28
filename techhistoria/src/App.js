import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Timeline from './Components/Timeline';
import TimeDetails from './Components/TimeDetails';
import CreateEvent from './Components/CreateEvent';
import ErrorPage from './Components/ErrorPage';

function App() {
  // Timeline State that holds all the timeline data
  const [timeLine, setTimeLine] = useState([])
  // Search Timeline state
  const [searchTimeLine, setSearchTimeLine] = useState("")
  // State used to store decade so we can sort by it
  const [decade, setDecade] = useState("All")

  // Fetches on Load
  useEffect(() => {
    fetch("http://localhost:4000/history")
      .then(r => r.json())
      .then(data => {
        setTimeLine(data)
      })
  }, [])

  // the function that pushes the form Data to the backend
  function addHistory(newEvent) {
    fetch("http://localhost:4000/history", {
      method: "POST",
      headers: {
        "Content-type": "Application/JSON"
      },
      body: JSON.stringify(newEvent)
    })
      .then(r => r.json())
      .then(data => {
        const addNewHistory = [...timeLine, data]
        setTimeLine(addNewHistory)
      })
  }

  // Routes
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Timeline timeLine={timeLine} searchTimeLine={searchTimeLine} setSearchTimeLine={setSearchTimeLine} decade={decade} setDecade={setDecade} />} />
        <Route path='/history/:id' element={<TimeDetails setSearchTimeLine={setSearchTimeLine} setDecade={setDecade} />} />
        <Route path='/createhistory' element={<CreateEvent addHistory={addHistory} />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
