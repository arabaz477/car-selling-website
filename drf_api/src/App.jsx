import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Slice from "./Slice";
import Cars from "./Cars";
import Car_listing from "./Car_listing";
import Login from "./Login";
import Register from "./Register";
import Details from "./Details";
import CardDetails from "./CardDetails";
import AddPage from "./AddPage";

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
            <Slice/>
             <Cars/>
             <CardDetails/>
<AddPage/>
            </>
          }
        />
        <Route path="/login" element={<Login />} />
          <Route path="/Car_listing" element={<Car_listing />} />
          <Route path="/card/:id" element={<CardDetails />} />
          <Route path="/card/:id/AddPage" element={<AddPage />} />
       <Route path="/card/:id/AddPage" element={<AddPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;