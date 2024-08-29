import { Link } from "react-router-dom"

export function AppBar () {
  return <div className="border-b font-semibold mx-4 flex justify-between py-4">
    <Link className="flex flex-col justify-center cursor-pointer" to={"/blogs"}>
    
      Medium
    </Link>
    <div className="flex justify-end">
    <div>
       <Link to={"/publish"}>
         <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mr-4">New</button>
       </Link>
    </div>
    
       <div className=" mx-2 relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
         <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
      </div>
    
    </div>
  </div>
}

