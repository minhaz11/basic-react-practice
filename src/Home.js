import { useState,useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {
    const [blogs,setBlogs] = useState(null)
   
    const blogRemove = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id != id)
        setBlogs(newBlogs);
    }

   
    useEffect(() => {
      fetch('http://localhost:8000/blogs').then(res => {return res.json()}).then(data => {setBlogs(data)
     console.log(data);
    })
    },[]);

    return ( 
        <div>
         {blogs && <BlogList blogs={blogs} blogRemove={blogRemove} /> }
        </div>
    );
}
 
export default Home;