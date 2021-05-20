Para el correcto funcionamiento del proyecto hemos eliminado la función /user/{identifier} porque daba más problemas que otra cosa.
Ahora directamente cogemos todos los usuarios y los guardamos localmente en una lista en el lado del servidor (igual que los blogs y posts/comentarios),
de esta forma nos ahorramos los problemas que dan las funciones asíncronas, aunque para bases de datos masivas supone un gran coste, pero hablamos con Rafa el lunes 11
y vimos que era la mejor solución.
Además somos conscientes de que la plataforma es poco segura en lo relacionado a los datos, pero tampoco lo hemos considerado algo relevante en el proyecto.