import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import RecentProjects from "./components/RecentProjects";

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<RecentProjects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
      {/* <Header /> */}
      {/* <HomePage /> */}
    </div>
  )
}

export default App