import { useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <>
      <Header isSideBarOpen={isSideBarOpen} handleOpenSidebar={handleOpenSidebar} />
      <Sidebar isSideBarOpen={isSideBarOpen} />
    </>
  );
}

export default App;
