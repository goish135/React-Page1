import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Abouts from "./components/Abouts";
import AboutPage from "./components/AboutPage";
import FirstTable from "./components/FirstTable";
import Table2 from "./components/Table2";
import Test from "./components/Test";



export default function App() {

    return (
        <BrowserRouter basename={'/React-Page1/'}>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
            {/* <Route index element={<Home />} /> */}
            <Route path="/" element={<FirstTable />} />
            <Route path="/abouts" element={<AboutPage />} />
            <Route path="/test" element={<Test />} />
            <Route path="/table2" element={<Table2 />} />
            {/* <Route path="contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    )

}