
import style from "../../../styles/Blogpost.module.css"

/*
for server side rendering :
  1. remove"use client" and react hooks
  2. fetch("", {cache:"no-store"})
  3. make a variable of usestate that you want to use
  4. let the variable = function() that was used in useEffect hook
 */
const page =async({params}) => {

  const fetchdata=async()=>{
    let res= await fetch(`http://localhost:3000/api/blog/${params.slug}`,{
    cache:"no-store"  
  })
    let data= await res.json();
    return data;
  }
  //this makes the page server side rendered
  let blog= await fetchdata();
  
  function createmarkup(desc){
    return {__html: desc};
  }
  
  return (
    <>
    {blog && <div className={style.main}>
      <h1>{blog.title}</h1>
      <br /><br />
       <p dangerouslySetInnerHTML={createmarkup(blog.description)}></p>
    </div>
  }
  </>
  )
}

export default page
