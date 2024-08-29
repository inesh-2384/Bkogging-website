import { Link } from "react-router-dom";

interface BlogCardProps {
  AuthorName : string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}

export const BlogCard = ({
  id,
  AuthorName,
  title,
  content,
  publishedDate,
  
}:BlogCardProps) => {
  return <Link to={`/blogs/${id}`}>
     <div className="  border-b border-slate-200 p-4 w-screen max-w-screen-md cursor-pointer">
       <div className="flex ">
            <div className="">
               <Avathar name={AuthorName}></Avathar>
            </div>
            <div className="font-extralight pl-2 text-sm flex justify-center flex-col ">
               {AuthorName}
            </div>
            <div className="pl-2 font-thin text-slate-400 text-sm flex justify-center flex-col ">
              . {publishedDate}
            </div>
       </div>
       <div className="font-semibold text-xl pt-2">
          {title}
       </div>
       <div className="font-thin text-md">
         {content.slice(0,100) + "...."}
       </div>
    </div>
  </Link>
  
}

export function Avathar({ name }:{name:string }){
   return<div className={`relative inline-flex items-center justify-center w-4 h-4 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
           <span className="text-xs text-gray-600 dark:text-gray-300">{name[0]}</span>
       </div>
   
}

