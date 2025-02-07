import {FaSun, FaMoon} from 'react-icons/fa'; 
const Header = ({ handleToggleDarkMode, darkMode }) => { 
    // const icon = darkMode ? <FaSun /> : <FaMoon />;
  
    return (
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-5xl font-bold text-green-900">Notes</h1>
        <button
          className="toggle my-6 p-2 text-xl rounded-full bg-green-600 hover:bg-green-900 transition duration-500 text-green-50"
          onClick={() => handleToggleDarkMode((prev) => !prev)} 
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    );
  };
  
  export default Header;
  