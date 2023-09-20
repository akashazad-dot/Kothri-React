import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main";
import Shops from "./components/shop/Shops";
import Grocery from "./components/Shops_All_Files/Grocery";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Cake from "./components/Shops_All_Files/Cake";
import General from "./components/Shops_All_Files/General";
import Electronics from "./components/Shops_All_Files/Electronics";
import Chemist from "./components/Shops_All_Files/Chemist";
import Phone_repair from "./components/Shops_All_Files/Phone_repair";
import Stationary from "./components/Shops_All_Files/Stationary";
import Xerox from "./components/Shops_All_Files/Xerox";
import Cycle from "./components/Shops_All_Files/Cycle";
import Bike from "./components/Shops_All_Files/Bike";
import Garments from "./components/Shops_All_Files/Garments";
import Sarees from "./components/Shops_All_Files/Sarees";
import Fruits from "./components/Shops_All_Files/Fruits";
import Vegetable from "./components/Shops_All_Files/Vegetable";
import Saloon from "./components/Shops_All_Files/Saloon";
import Restaurant from "./components/Pages/Restaurant";
import Hotel from "./components/Pages/Hotel";
import PGs from "./components/Pages/PGs";
import Mess from "./components/Pages/Mess";
import Picnic from "./components/Pages/Picnic";
import BusStop from "./components/Pages/BusStop";
import Taxi from "./components/Pages/Taxi";
import Auto from "./components/Pages/Auto";
import Temples from "./components/Pages/Temples";
import Clinics from "./components/Pages/Clinics";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/navbar" element={<Navbar />}></Route> */}
        <Route path="/shops" element={<Shops />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/pgs" element={<PGs />} />
        <Route path="/mess" element={<Mess />} />
        <Route path="/picnic" element={<Picnic />} />
        <Route path="/bus" element={<BusStop />} />
        <Route path="/taxi" element={<Taxi />} />
        <Route path="/auto" element={<Auto />} />
        <Route path="/temples" element={<Temples />} />
        <Route path="/clinics" element={<Clinics />} />

        <Route path="/grocery" element={<Grocery />} />
        <Route path="/cake" element={<Cake />} />
        <Route path="/general" element={<General />} />
        <Route path="/electronic" element={<Electronics />} />
        <Route path="/Chemist" element={<Chemist />} />
        <Route path="/mobile" element={<Phone_repair />} />
        <Route path="/statainory" element={<Stationary />} />
        <Route path="/xerox" element={<Xerox />} />
        <Route path="/cycle" element={<Cycle />} />
        <Route path="/bike" element={<Bike />} />
        <Route path="/garments" element={<Garments />} />
        <Route path="/sarees" element={<Sarees />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/vegetable" element={<Vegetable />} />
        <Route path="/saloon" element={<Saloon />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
