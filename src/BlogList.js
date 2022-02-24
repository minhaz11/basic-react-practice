import { Link } from "react-router-dom";

const BlogList = ({blogs}) => {
    return ( 
         <div>
             {blogs.map((blog)=> (
               <Link key={blog.id} to={`/blogs/${blog.id}`}>
                    <div>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </div>
               </Link>
            ))}
         </div>
        
     );
}
 
export default BlogList;