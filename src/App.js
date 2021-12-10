import LogoList from "./Components/LogoList";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import './Styles/Global.css'
import SectionDE from "./Components/SectionDE";
import SectionCS from "./Components/SectionCS";
import SectionPT from "./Components/SectionPT";
import Plan from "./Components/Plan";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <div className="container">
          <Banner/>
          <LogoList/>
          <SectionDE/>
          <SectionCS/>
          <SectionPT/>
          <Plan/>
          <Blog/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
