import {useState , useEffect} from 'react'
import { BACKEND_URL } from '../config';
import axios from 'axios';

export interface BlogType{
  content: string;
  title: string;
  id: number;
  author:{
    name: string;
    }
}

export const useBlogs = () => {
  const[loading, setLoading] = useState(true);
  const[blogs, setBlogs] =useState<BlogType[]>([]);

  useEffect( () => {
    axios.get(`${BACKEND_URL}/api/vi/blog/bulk`,{
      headers:{
        Authorization: localStorage.getItem("token")
      }
    })
       .then(response => {
        setBlogs(response.data.blogs);
        setLoading(false);
       })
  },[])

  return{
    loading,
    blogs
  }

}
  export const useBlog = ({id}:{id: string}) => {
    const[loading, setLoading] = useState(true);
    const[blog, setBlog] =useState<BlogType>();
  
    useEffect( () => {
      axios.get(`${BACKEND_URL}/api/vi/blog/${id}`,{
        headers:{
          Authorization: localStorage.getItem("token")
        }
      })
         .then(response => {
          setBlog(response.data.blog);
          setLoading(false);
         })
    },[id])

  return{
    loading,
    blog
  }
}