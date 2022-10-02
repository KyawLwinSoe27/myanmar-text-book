import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card-Body/Card';
import GradeOne from './containers/GradeOne/Cards';
import Building from './containers/Building/building';
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
          <Route path='/building' element={<Building/>}/>
        </Routes>
      </main>
    </React.Fragment>
  )
}

export default App