import './App.css';
import NavBar from "./Components/Navbar/NavBar";
import HeroSection from './Sections/Hero-Section/HeroSection';
import Section2 from "./Sections/Section2/section2";
import Section3 from "./Sections/Section3/Sec3"

function App() {
  return (
    <div className='bg-[#2B2B2B]'>
    <NavBar/>
    <HeroSection/>
    <Section2 className="mx-auto"/>
    <Section3 className=""/>
    </div>
  );
}

export default App;
