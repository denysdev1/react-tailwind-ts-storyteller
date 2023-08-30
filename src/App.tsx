import { useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { ContentPage } from "./pages/ContentPage";

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <>
      <Header isSideBarOpen={isSideBarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar isSideBarOpen={isSideBarOpen} closeSidebar={toggleSidebar} />
        <ContentPage isSideBarOpen={isSideBarOpen} />
      </div>
    </>
  );
}

export default App;
