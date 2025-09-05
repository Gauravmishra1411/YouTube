
import { MdKeyboardVoice } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa"; // search icon
import { useDispatch } from "react-redux";
import { toggleMenu } from "../util/Slice/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SERACH_API } from "../util/Contact.js"

const Header = () => {
  const [searchSuggetion, setsearchSuggetion] = useState()
  const [suggetion, setsuggetion] = useState([])
const [showSuggestion,setShowSuggestion]=useState(false)

  useEffect(() => {
    const timer = setTimeout(() => getSuggestion(), 200)
    return () => {
      clearTimeout(timer)
    }
  }, [searchSuggetion])
  async function getSuggestion() {
    const data = await fetch(YOUTUBE_SERACH_API + searchSuggetion)
    const json = await data?.json()
    console.log(json[1])
    setsuggetion(json[1])
  }
  console.log("suggestionSearch", searchSuggetion);


 
  const dispatch = useDispatch()
  const toggelMenuHandler = () => {
    dispatch(toggleMenu())
  }
   
 

  return (

    <div className="flex justify-between items-center px-4 py-1 border-b border-gray-300 shadow-lg  
    
    sticky top-0 z-50 bg-white "  
      
    >
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <img
          onClick={() => toggelMenuHandler()}
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


      <div className="flex items-center w-1/2">

        <input
          type="text"
          placeholder="Search"
          value={searchSuggetion}
          onChange={(e) => setsearchSuggetion(e.target.value)}
          onFocus={()=>setShowSuggestion(true)}
          onBlur={()=>setShowSuggestion(false)}
          
       
          className="w-6/12 border border-gray-400 h-10 pl-2 rounded-l-full focus:outline-none"
        />
        <button className="flex items-center justify-center bg-gray-100 border border-gray-400 h-10 w-14 rounded-r-full hover:bg-gray-200">
          <FaSearch />
        </button>
        <button className="ml-3 p-2 rounded-full hover:bg-gray-100">
          <MdKeyboardVoice size={22} />
        </button>
        {showSuggestion && (  <div className="absolute mt-96  w-3/12 max-h-96  overflow-y-clip  shadow-lg rounded-lg bg-white border border-gray-300">
          { searchSuggetion ?( (<ul className="divide-y-2 ">
             
            {suggetion?.map((item, index) => (
              <li
                key={index}
                className="px-4 py-1 hover:bg-gray-100 cursor-pointer"
              >
                {item.slice(0, 80)}
              </li>
            ))}
          
          </ul>)):(null) }

        </div>
)}
      

      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <FaUserAlt size={22} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
