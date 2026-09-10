import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Services from "./Services";
import Contact from "./Contact"
import Cars from "./Cars";
import Car_listing from "./Car_listing";
import Login from "./Login";
import Register from "./Register";
import Details from "./Details";
import CardDetails from "./CardDetails";
import AddPage from "./AddPage";
import AdminOrders from "./AdminOrders";
import Images from "./Images";
import Footer from "./Footer";

import "./App.css";


function App() {
  return (
     <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
             <Cars/>
             <Images/>
             <CardDetails/>
             <AddPage/>
             <AdminOrders/>


            </>
          }
        />
        <Route path="/login" element={<Login />} />
          <Route path="/Car_listing" element={<Car_listing />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/card/:id" element={<CardDetails />} />
          <Route path="/card/:id/AddPage" element={<AddPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/AdminOrders" element={<AdminOrders />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;