import { Component } from '@angular/core';
import{Productos} from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  imageWidth:number=60;
  imageMargin=2;
  muestraImg:boolean=true;
  listFilter:string=''

  muestImg():void{
    this.muestraImg=this.muestraImg;
  }


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
      "year":"agosto 5 2024",
      "Marca":"KIA",
      "Color":"rojo",
      "imagenUrl":""

    }

  ]

}
