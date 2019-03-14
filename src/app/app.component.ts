import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['']
})
export class AppComponent {
   
  informaciones: any = [
    {Codigo: 1, Nombre: "Ricky Jose", Apellido: "Galan Paulino", Sueldo: 20000},
    {Codigo: 1, Nombre: "Ricky Junior", Apellido: "Galan Paulino", Sueldo: 30000},
    {Codigo: 1, Nombre: "Ricky Joshe", Apellido: "Galan Paulino", Sueldo: 40000},
    {Codigo: 1, Nombre: "Ricky Jordan", Apellido: "Galan Paulino", Sueldo: 50000}
  ];

}
