import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { NavbarComponent } from "./components/Navbar.component";
import { AlertComponent } from "./components/Alert.component";
import { AlertState } from "./context/alert/alertState";
import { FirebaseState } from "./context/firebase/firebaseState";

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <Router>
          <NavbarComponent />
          <div className="container pt-4">
            <AlertComponent />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
