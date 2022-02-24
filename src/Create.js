import { useState } from "react";

const Create = () => {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('Mario')

    const formSubmit = (e) => {
        e.preventDefault()
        const data = {title,body,author}

        fetch('http://localhost:8000/blogs',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        }).then((res)=>{
            console.log(res);
            
        })
    }
    return ( 
        <div className="container">
            <h3>Create new blog</h3>
            <form onSubmit={formSubmit}>
                <div className="form-group">
                    <label>title</label>
                    <input className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Body</label>
                    <textarea className="form-control" value={body}  onChange={(e) => setBody(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <label>Author</label>
                   <select value={author} onChange={(e) => setAuthor(e.target.value)} className="form-control">
                       <option value="Mario">Mario</option>
                       <option value="Admin">Admin</option>
                   </select>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
     );
}
 
export default Create;