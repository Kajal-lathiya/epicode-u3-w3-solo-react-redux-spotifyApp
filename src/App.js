import Homecomponent from "./components/HomeComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import SearchComponent from "./components/SearchComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path="/search" element={<SearchComponent />} />
        <Route path="/home" element={<Homecomponent />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
