import { useState,useEffect } from 'react';

const useFetch = (url) => {
    const [data,setData] = useState(null)
    useEffect(() => {
        const abortCont = new AbortController()
        setTimeout(
           () => {
            fetch(url,{signal:abortCont.signal}).
            then(res => {
                if(!res.ok) throw Error('Could not fetch data'); 
                return res.json()
              })
            .then(data => {setData(data)})
            .catch(err => {
              console.log(err.message);
            })
           },1000
        );
        return () => abortCont.abort()
      },[]);

    return {data}
}
 
export default useFetch;