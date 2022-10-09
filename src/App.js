import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card-Body/Card';
import GradeOne from './containers/GradeOne/Cards';
import GradeTwo from './containers/GradeTwo/Cards';
import GradeThree from './containers/GradeThree/Cards';
import GradeFour from './containers/GradeFour/Cards';
import GradeFive from './containers/GradeFive/Cards';
import Building from './containers/Building/building';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';

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
          <Route path='/grade_2' element={<GradeTwo /> }/>
          <Route path='/grade_3' element={<GradeThree /> }/>
          <Route path='/grade_4' element={<GradeFour />} />
          <Route path='/grade_5' element={<GradeFive />} />
          <Route path='/building' element={<Building/>}/>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  )
}

export default App