const BlogList = ({blogs,blogRemove}) => {
    return ( 
       
         <div>
             {blogs.map((blog)=> (
               <div key={blog.id}>
                   <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={()=>{blogRemove(blog.id)}}>Remove</button>
               </div>
            ))}
         </div>
        
     );
}
 
export default BlogList;