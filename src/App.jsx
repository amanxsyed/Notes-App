import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container mx-auto max-w-screen-lg min-h-screen p-4 ">
        <Header handleToggleDarkMode={setDarkMode} darkMode={darkMode} />
      </div>
    </div>
  );
}
// 013A81
export default App;
