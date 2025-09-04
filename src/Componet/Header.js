 
import { MdKeyboardVoice } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa"; // search icon
import { useDispatch } from "react-redux";
import { toggleMenu } from "../util/Slice/appSlice";
const Header = () => {
 
 const dispatch=useDispatch()
 const toggelMenuHandler=()=>{
  dispatch(toggleMenu())
 }
  return (
    
    <div className="flex justify-between items-center px-4 py-1 border-b border-gray-300 shadow-lg  sticky top-0 z-50 bg-white ">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <img
         onClick={()=>toggelMenuHandler()}
          className="w-6 cursor-pointer"
          alt="menu"
          src="https://www.svgrepo.com/show/506800/burger-menu.svg"
 
        />
        <img
          className="w-20 cursor-pointer"
          alt="youtube"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
        />
      </div>

      {/* Middle Section (Search Bar) */}
      <div className="flex items-center w-1/2">
        <input
       
          type="text"
          placeholder="Search"
          className="w-6/12 border border-gray-400 h-10 pl-2 rounded-l-full focus:outline-none"
        />
        <button className="flex items-center justify-center bg-gray-100 border border-gray-400 h-10 w-14 rounded-r-full hover:bg-gray-200">
          <FaSearch />
        </button>
        <button className="ml-3 p-2 rounded-full hover:bg-gray-100">
          <MdKeyboardVoice size={22} />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <FaUserAlt size={22} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
