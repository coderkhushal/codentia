
import fs from 'fs/promises';

export async function GET(req,{params}) {
  try {
    
    const data = await fs.readFile(`./app/blogstorage/blogs/${params.slug}.json`, 'utf8');
    
    return new Response(data, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({title: 'No such Blog exists' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

