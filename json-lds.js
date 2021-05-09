{
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": "0",  // Aqui el id de blog
        "headline": "mi título",
        "description": "comentario va aqui",
        "genre" : "categoria",
        "author": {
              "@type": "Person",
              "@id": "0" // Aqui el id de autor.
              "name": "Rafael"   // Nombre de autor.
        }
}

{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": "0",
        "identifier": 0, 
        "text": "texto",
        "blogId" : {
                "@type": "Blog",
                "@id": "0",
                "identifier": 0
        },
        "author": {
              "@type": "Person",
              "@id": "0",
              "identifier": 0,
              "name": "Rafael"
        }
}

{
        "@context": "https://schema.org",
        "@type": ["Person", "DeliveryEvent"],
        "@id": "",
        "identifier": "0",
        "name": "Rafael",
        "email": "pp@gmail.com",
        "accessCode": "password"
}