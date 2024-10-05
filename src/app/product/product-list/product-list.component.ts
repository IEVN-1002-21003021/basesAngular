import { Component } from '@angular/core';
import{Productos} from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  //*ngIf=True o false 
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
      "imagenUrl":" https://static.wikia.nocookie.net/disney/images/d/d2/SallyCarrera.png/revision/latest?cb=20140204155650&path-prefix=es"
    },
    {
      "ProductoId":2,
      "Modelo":"audi",
      "Descripcion":"4 puertas",
      "Precio": 20000,
      "year":2024,
      "Marca":"AUDI",
      "Color":"verde",
      "imagenUrl":"https://static.wikia.nocookie.net/disney/images/3/34/Mate.png/revision/latest?cb=20140131093119&path-prefix=es"

    },
    {
      "ProductoId":3,
      "Modelo":"Rio",
      "Descripcion":"4 puertas",
      "Precio": 20000,
      "year":"agosto 5 2024",
      "Marca":"KIA",
      "Color":"rojo",
      "imagenUrl":" https://static.wikia.nocookie.net/pichipichipitchadventures/images/b/ba/El_Rayo_Mcqueen.jpg/revision/latest/scale-to-width-down/440?cb=20120712185523&path-prefix=es"

    }

  ]

}
