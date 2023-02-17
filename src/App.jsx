import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Intro from "./components/intro/Intro.jsx";
import { ProductList } from "./components/productList/ProductList.jsx";
import Toggle from "./components/toggle/Toggle.jsx";
import { ThemeContext } from "./context";
import { useContext } from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Map from "./components/map/Map.jsx";
import Footer from "./components/footer/Footer.jsx";
const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Navbar />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    
      <Footer />
    </div>
  );
};

export default App;
