import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
   const {data} = useFetch('http://localhost:8000/blogs')
    return ( 
        <div>
          {data && <BlogList blogs={data}/>}
        </div>
    );
}
 
export default Home;