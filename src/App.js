import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card-Body/Card';
import GradeOne from './containers/GradeOne/Cards';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Card />} />
          <Route path='/about' element={<Card />} />
          <Route path='/grade_1' element={<GradeOne /> }/>
        </Routes>
      </main>
    </React.Fragment>
  )
}

export default App