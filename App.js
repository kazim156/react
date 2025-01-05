import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import StatusSection from "./StatusSection";
import ContentSection from "./ContentSection";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Sidebar />
        <div className="content">
          <StatusSection />
          <ContentSection />
        </div>
      </div>
    </div>
  );
}

export default App;