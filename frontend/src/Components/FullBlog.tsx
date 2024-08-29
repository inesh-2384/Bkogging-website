import { BlogType } from "../Hooks"
import { AppBar } from "./AppBar"
import { Avathar } from "./BlogCard"


export const FullBlog = ({blog}:{blog: BlogType}) => {
  return <div>
    <div>
       <AppBar></AppBar>
    </div>
    <div className="flex justify-center">
    <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl pt-12">
       <div className=" col-span-8">
          <div className="text-5xl font-extrabold pt-4">
            {blog.title}
          </div>
          
          <div className="text-slate-500">
            post on 2nd December
          </div>

          <div className="pt-2">
            {blog.content}
          </div>

       </div>
       <div className="  col-span-4">
          <div className="text-slate-600 text-lg">
            Author
          </div>
          <div className="flex">
            <div className="pr-4 flex flex-col justify-center">
              <Avathar name={blog.author.name }></Avathar>
            </div>
             <div className="text-xl font-bold">
                {blog.author.name || "Anonymous"} 
             </div>
             <div>
                "hi, this is the bio of the user,he can make it attractive"
             </div>
           </div>
       </div>
    </div>
    </div>
  </div>
}

