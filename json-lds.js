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

SE PUEDE USAR COMMENT, CREO
{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": "0",  // Aqui el id de post
        "headline": "mi título",
        "description": "comentario va aqui",
        "genre" : "categoria",
        "author": {
              "@type": "Person",
              "@id": "0", // Aqui el id de autor.
              "name": "Rafael"   // Nombre de autor.
        }
}

OPCION A
{
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "0",  // Aqui el id de post
        "name": "Rafael",
        "email": "pp@gmail.com",
        "accessCode" : "password"
}

OPCION B
{
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "0",
        "name": "Rafael",
        "email": "pp@gmail.com",
        "DeliveryEvent" : {
              "@type": "DeliveryEvent",
              "accessCode": "password"
        }
}