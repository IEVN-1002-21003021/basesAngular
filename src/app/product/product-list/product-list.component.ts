import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {


  productos:any[]=[
    {
      "ProductoId":1,
      "Modelo":"sentra",
      "Descripcion":"4 puertas",
      "Precio": 20000,
      "year":2024,
      "Marca":"NISSAN",
      "Color":"Azul",
      "imagenUrl":""
    },
    {
      "ProductoId":2,
      "Modelo":"audi",
      "Descripcion":"4 puertas",
      "Precio": 20000,
      "year":2024,
      "Marca":"AUDI",
      "Color":"verde",
      "imagenUrl":""

    },
    {
      "ProductoId":3,
      "Modelo":"Rio",
      "Descripcion":"4 puertas",
      "Precio": 20000,
      "year":2024,
      "Marca":"KIA",
      "Color":"rojo",
      "imagenUrl":""

    }

  ]

}
