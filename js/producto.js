fetch('../json/productos.json')
    // Exito
    .then(response => response.json())  // convertir a json
    .then(json => 
        json.forEach(element => {
            let productos = document.getElementById("prodcutos");
            let div = document.createElement("div");
            div.className = "card card-" + element.id;
            let h2 = document.createElement("h2");
            h2.style.textAlign="center";
            h2.innerText = element.nombre;
            div.appendChild(h2);
            let img = document.createElement("img");
            img.setAttribute("src", element.img);
            img.setAttribute("alt", element.nombre);
            img.className = `class = "card-img-top"`;
            let divHija = document.createElement("div");
            divHija.className = "card-body";
            let p1 = document.createElement("p");
            p1.className = "card-text";
            p1.innerText = element.descripcion;
            let p2 = document.createElement("p");
            p2.className = "card-text";
            p2.innerText = "$" + element.precio;
            divHija.appendChild(p1);
            divHija.appendChild(p2);
            div.appendChild(img);
            div.appendChild(divHija);
            productos.appendChild(div);
        })
    
    )//creamos las tarjetas de los productos
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
/*
    <div class="card-id">
            <h2 style="text-align: center;">categoria</h2>
            <img src="img" class="card-img-top" alt=nombre>
            <div class="card-body">
              <p class="card-text">nombre</p>
              <p>$precio</p>
            </div>
        </div>
*/