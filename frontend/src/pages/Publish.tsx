import { ChangeEvent } from 'react';

import axios from "axios";
import { AppBar } from "../Components/AppBar"
import { BACKEND_URL } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Publish = () => {
  const [title , setTitle] = useState("");
  const [content , setContent] = useState("")
  const navigate = useNavigate();
  return <div>
     <div>
         <AppBar></AppBar>
     </div>
     <div className="flex justify-center flex-col my-16">
     <div className="mx-4">
       <label className="font-extrabold text-2xl ">Title..</label>
       <div className="mx-2 ml-7 px-9 w-full border-2">
         <input onChange={(e) => {
          setTitle(e.target.value)
         }} type="text" placeholder="Enter the Text"  name="fname" className="w-full cursor-pointer"></input>
       </div>
     </div>
     <div>
       <ArticleText onChange={(e) => {
           setContent(e.target.value)
       }}></ArticleText>
     </div>
     <div className="mt-5 mx-5 cursor-pointer">
       <button onClick={async()=>{
        const response = await axios.post(`${BACKEND_URL}/api/vi/blog`,{
          title,
          content
       },{
        headers: {
          Authorization: localStorage.getItem("token")
        }
       });
       if(response){
        alert("Blog created Successfully");
        navigate(`/blog/${response.data.id}`)
       }else{
        alert("Error while creating data");
       }
       
       }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Publish</button>
     </div>
     </div>
  </div>
    
  
}

function ArticleText({onChange}:{onChange:(e : ChangeEvent<HTMLTextAreaElement>) => void}) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Write Your Article
      </label>
      <div className="mx-5">
        <textarea onChange={onChange}
        className="block py-20 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Write your thoughts here..."
        ></textarea>
      </div>
    </div>
  );
}
