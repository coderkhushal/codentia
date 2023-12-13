import fs from "fs/promises"
import { Albert_Sans } from "next/font/google";

export async function POST(req){
    try{

        const data= await fs.readdir("./app/blogstorage/blogs")
        let count = await req.json();
        // console.log(count)
        let allblogs=[];
       
        for (const e of data) {
            const jsonstring = await fs.readFile(`./app/blogstorage/blogs/${e}`, "utf8");
            let object= await JSON.parse(jsonstring)
            allblogs.push(object);
        }
        let requiredblogs = allblogs.slice(count);
        
        return new Response(JSON.stringify(requiredblogs),{
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            },
        })
    }catch(err){    
        console.log(err);
        return new Response(JSON.stringify({message:"Error reading BLogs"}),{
            status:500,
            headers:{
                'Content-Type': 'application/json',
            }
        })
    }
}