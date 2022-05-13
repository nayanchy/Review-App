import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FeedbackList from "./Components/FeedbackList";
import Header from "./Components/Header";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./Components/AboutIconLink";
import {FeedbackProvider} from './Context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
              
            } />
            <Route exact path= '/about' element ={<AboutPage />} /> 
          </Routes>
        </div>
          <AboutIconLink />
      </Router>
    </FeedbackProvider>
    
  )
}

export default App;
