
import './App.css';
import Bannner from './Component/Bannner';
import FeaturesPage from './Component/FeaturesPage';
import Footer from './Component/Footer';
import Landingpage from './Component/Landingpage';
import Navbar from './Component/Navbar';
import Testimonials from './Component/Testimonials';


function App() {
  return (
    
    <div>
      <Navbar/>
      <Landingpage/>
      <FeaturesPage/>
      <Testimonials/>
      <Bannner/>
       <Footer/>
  
    </div>
  );
}

export default App;
