//HTTP GET

/*El servidor y el navegador web se comunican entre sí mediante el protocolo HTTP. La pestaña Network muestra cómo se comunican el navegador y el servidor. Hay cabeceras de respuesta y de request donde puedo ver diferentes datos como por ej el content-type (nos dice que el archivo es de tal formato. Sin esta cabecera content-type, el servidor no sabría cómo analizar correctamente los datos. porej)*/

/*En las aplicaciones que se utilizaban antes si hacía una solicitud post, luego hacía un redirect a la página principal por ej y eso hace que se vuelva no solo a pedir el Get de la home, sino a volver a cargar el css, el js, etc. A diferencia de cuando hago una petición Get exitosa que el código es 200, en el caso del redireccionamiento exitoso es 302. IGUAL YA NO ES RECOMENDABLE ESTA PRACTICA*/ 

/*Los sitios web de estilo SPA no obtienen todas sus páginas por separado del servidor sino que comprenden solo una página HTML obtenida del servidor, cuyo contenido se manipula con JavaScript que se ejecuta en el navegador. Un cambio en esto por ej se da en el formulario no tiene atributos de action o method para definir cómo y dónde enviar los datos de entrada. Cuando se crea exitosamente una peticiín Post con esta técnica no hay redireccionamiento y el estado es 201 Created*/

