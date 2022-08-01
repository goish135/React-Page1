import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Abouts from "./components/Abouts";
import FirstTable from "./components/FirstTable";
import Test from "./components/Test";



export default function App() {

    return (
        <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
            {/* <Route index element={<Home />} /> */}
            <Route path="/" element={<FirstTable />} />
            <Route path="/abouts" element={<Abouts />} />
            <Route path="/test" element={<Test />} />
            {/* <Route path="contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    )

}