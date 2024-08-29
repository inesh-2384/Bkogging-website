import { AppBar } from "../Components/AppBar"
import {  BlogCard } from "../Components/BlogCard"
import { useBlogs } from "../Hooks"
import { BlogsSkeleton } from "../Components/blogsSkeleton"

export const Blogs = () => {

  const {loading, blogs} = useBlogs();

  if (loading){
    return <div>
      <AppBar></AppBar>
       <div className="flex justify-center flex-col">
      <BlogsSkeleton></BlogsSkeleton>
      <BlogsSkeleton></BlogsSkeleton>
      <BlogsSkeleton></BlogsSkeleton>
      <BlogsSkeleton></BlogsSkeleton>
      <BlogsSkeleton></BlogsSkeleton>
    </div>
    </div>
  }
    return <div className="px-6">
    <AppBar></AppBar>
    <div className="flex justify-center">
      <div>
        {blogs.map(blog =><BlogCard
              id ={blog.id}
                AuthorName={blog. author.name || "Unknown"}
              title={blog.title}
              content={blog.content}
              publishedDate={"2nd Fed 2024"}
          ></BlogCard>)}
      
    </div>
    
  </div>
  </div>
}

