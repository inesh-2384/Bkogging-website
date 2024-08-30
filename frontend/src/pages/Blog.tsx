import { AppBar } from "../Components/AppBar";
import { FullBlog } from "../Components/FullBlog";
import { Spinner } from "../Components/Spinner";
import {  useBlog } from "../Hooks";
import { useParams } from "react-router-dom";



export const Blog = () => {
  const {id} = useParams<{ id: string }>();
  const {loading ,blog} = useBlog({
    id: id || " "
  });

  if(loading || !blog ){
    return<div>
      <AppBar></AppBar>
      <div className="h-screenflex flex-col justify-center">
      <div className="flex justify-center">
          <Spinner></Spinner>
      </div>
    </div>
    </div>
  }
  return <div>
     <FullBlog blog={blog}></FullBlog>
  </div>
    
  
}

