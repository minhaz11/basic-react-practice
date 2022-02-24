import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const { data } = useFetch('http://localhost:8000/blogs/'+id);
    return ( 
        <div>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
        </div>
    );
}
 
export default BlogDetails;