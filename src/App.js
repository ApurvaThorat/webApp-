import React , { useEffect }from 'react'
import About from './components/about/About'
import Home from './components/home/Home'
import AOS from 'aos';
import Service from './components/services/Service';
import Cards from './components/cards/Cards';
import Processes from './components/processes/Processes';
import PageFooter from './components/footer/PageFooter';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Home></Home>
      <About></About>
      <Service></Service>
      <Cards></Cards>
      <Processes></Processes>
      <PageFooter></PageFooter>
    </>
  )
}

export default App
