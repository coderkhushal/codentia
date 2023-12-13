"use client"
import style from "../../styles/Blog.module.css"
import Link from 'next/link'
import { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';

const page =  () => {
  const[allblogs, setallblogs]= useState([])
  const[n,setn]= useState(2)
  const [totalblogs, settotalblogs]= useState()
  
  const fetchblogs = async () => {
    
    let res = await fetch("http://localhost:3000/api/Allblogs", {
      method:"POST",
      cache: "no-store",
      headers:{
        "Content-Type":"application/json"
      },
      body:n

    })
    setn(n+2);
    let data = await res.json();
    settotalblogs(data.length);
    setallblogs([...allblogs,...data])
    
    
    
  }
  // let allblogs = await fetchallblogs();
  useEffect(()=>{
    fetchblogs();
    
  },[])



  return (
    
    <div className={style.main}>

        <div className="blog">


          <h2 >Blogs</h2>
          <hr />
          <br /><br />

          <InfiniteScroll 
          dataLength={allblogs.length} //This is important field to render the next data
        next={()=>{fetchblogs(n)}}
        hasMore={totalblogs==allblogs.length}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
          >
          {allblogs && allblogs.map((e) => {
            return (
              <Link href={`/Blogpost/${e.slug}`} key={e.title}>
                <div className={style.blogitem}>

                  <h3>{e.title}</h3>
                  <p>{e.metadesc}</p>
                </div>
                <br />

              </Link>

            )
          })}


    </InfiniteScroll>

        </div>
      </div>

  )
}
export default page

