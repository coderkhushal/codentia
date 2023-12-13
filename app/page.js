"use client"
import Image from 'next/image'
import styles from '../styles/page.module.css' //another way of importing css file
import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }} >

      <br />
      <main >
        <div className={styles.heading}>
        <Image src="/frontimage.jpg" alt="coding image" width={200} height={200} className={styles.myimg}></Image>
          <h1 className={styles.primaryh} >&lt;/Codentia&gt;
          </h1>
          <h3 >Blog for developers by a developer</h3>
        </div>
      </main>
      <br />
      <br />
      <br />
      <div className="blog">

        
        <h2 className={styles.secondaryh}>Popular Blogs</h2>
        <br /><br />
        <div className={styles.blogitem}>
      
          <h3> How to learn MERN stack in 2024?</h3>
          <p>NEXT is better as it provides various functionalities over Vue</p>
          <Link href="/Blogpost/learn-mern-stack"><button >Read More</button></Link>
        </div>
 
      <br />
        <div className={styles.blogitem}>
          <h3>How to learn Js in 2024?</h3>
          <p>jS is very much demanding language in today's world. Javascipt plays a major role in any website.  </p>
          <Link href="/Blogpost/learn-js-2024"><button >Read More</button></Link>
        </div>
        
      
      <br />
        <div className={styles.blogitem}>
          <h3>Which is better NEXT.js or VUE.js?</h3>
          <p>NEXT is better as it provides various functionalities over Vue</p>
          <Link href="/Blogpost/Next-vs-Vue"><button >Read More</button></Link>
        </div>
      
    
      
      </div>
      
    </div>
      

  )
}
