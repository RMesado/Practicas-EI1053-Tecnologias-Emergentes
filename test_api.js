const axios = require('axios')

let client = axios.create({
  baseURL: 'http://localhost:9000/',
  timeout: 1000,
})

async function createPost(blogId, author, text){

      if (blogId<0) return -1

      let postData = {authorId: author, text:text, blogId: blogId}
      try{
        let result = await client.post("/post/" + blogId, postData)
        if (result && result.data)
           console.log("Creado post con id:",result.data.id, 'en blog con id:', blogId)
        return result
     } catch(err) {
        console.log(err)
        return -1
     }
}

client.get("/blog?query=vegano").then(r => console.log('Blogs de veganos', r.data))
      
client.post("/blog", {blogId: 0, name: "Comida Vegana" , authorId: 0, category: "vegano", tags: ["comida", "vegano", "nabos"]})
      .then(resp => {
            let blogId = resp && resp.data ? resp.data.id  : -1
            if (blogId>=0) {
               console.log("Creado blog con id:", blogId)
               createPost(blogId, 0, "Policía vegana, a ver ese nabo")
               .then(_ => console.log('OK'))
           } else 
               console.log("No se ha creado :-(")          
      })
      .catch(error => console.log(error))
