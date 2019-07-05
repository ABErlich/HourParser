# HourParser

Prerequisitos:

<ul>
  <li>Tener instalado la ultima version de nodejs</li>
</ul>

Forma de uso:

1) Ejecutar npm install
2) Completar el template de horas con los datos
3) Crear un archivo ".env" en el directorio principal que contenga la informacion de usuario y contraseña de gaps, por ejemplo:

USER=myuser@domain.com.ar
PASS=myhashedpassword

el password hasheado hay que obtenerlo de un request usando gaps

4) node index.js
5) Las horas se cargan en gaps usando la api
