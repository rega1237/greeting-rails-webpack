// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Greeting from "./components/greeting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Hello this is home</h1>} />
        <Route
          path="/greet"
          element={<Greeting />}
        />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);