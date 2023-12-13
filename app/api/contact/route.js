
import fs from "fs/promises"
export async function POST(req){
    try {
        let body= await req.json()
        let n= await fs.readdir("app/blogstorage/contactdata")
        let contactdata = JSON.stringify(body)
        fs.writeFile(`app/blogstorage/contactdata/${n.length+1}.json`,contactdata,{
            encoding:"utf8"
        },function(err){
            if(err){
                console.log(err)
                return;
            }
            console.log("this file was saved")
        })
        return new Response(JSON.stringify({"success":true}), {
            status:200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        // Handle the exception here
        console.log(error)
        return new Response.json({"success":false})
    }
}