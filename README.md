# Review

Notas de repaso de los conceptos básicos de GIT

Empezar a trabajar con GIT -> git init

Enviar cambio al staging -> git add <nombre del archivo> ; si se quiere enviar todo git add .
  
Enviar cambio a control de versión -> git commit -m <mensaje referente al cambio>
  
Abrir canal con el repositorio remoto -> git remote add <nombre del repositorio> <URL>
  
Enviar cambios al repositorio remoto -> git push <nombre de la rama remota>
  
Traer cambios del remoto -> git pull <nombre remoto> <nombre de la rama>
  
Cambio de rama -> git checkout
  
Crear rama -> git checkout -b <nombre de la rama>
  
Unir ramas -> git merge <rama a unir>

# HTML

Se crea una rama de html para realizar el ejercicio de clase. 

Etiquetas principales
<head> - Dentro del head están los redireccionamientos y lógica de la página 
<body> - Se divide en <header>, <main>, <footer> donde se ubican todos las demás características de la página. En el <main> se ubican las secciones con la etiqueta <section>.

Para insertar texto se puede usar la etiquetra <article>, dentro de esta se puede insertar de tres formas:
 1. Usando las etiquetas <h1>, <h2>, <h3>, <h4>, <h5>, <h6> donde las h1 es la etiqueta con letra más grande.
 2. Párrafos de texto largos con <p>
 3. textos cortos <span>

Con el fin de insertar imágentes se usa la etiqueta <img scr='' alt=''>

Links con la etiqueta <a href=''>

Listas se dividen en ordenadas <ol> o desordenadas <ul>. Los componentes de la lista se insertan con la etiqueta <li>