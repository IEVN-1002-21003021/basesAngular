import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre: string = '';
  cantidadBoletos: number = 0;
  cantidadPersonas: number = 0;
  tarjetaCinepolis: boolean = false;
  valorAPagar: number = -1; 

  precioBoleto: number = 12;

  calcularTotal() {
    if (this.cantidadBoletos > this.cantidadPersonas * 7) {
      alert('Cada persona solo puede comprar hasta 7 boletos. Ajuste la cantidad de boletos.');
      return;  
    }

    
    let total = this.cantidadBoletos * this.precioBoleto;

    
    if (this.cantidadBoletos >= 5 && this.cantidadBoletos <= 7) {
      total *= 0.85; 
    } else if (this.cantidadBoletos >= 3) {
      total *= 0.90; 
    }

  
    if (this.tarjetaCinepolis) {
      total *= 0.90; 
    }

    
    this.valorAPagar = total;
  }
}
