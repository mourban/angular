import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  informacion: any = [
    {
      codigo: 1,
      nombre: "Elis",
      apellido: "Urbano",
      sueldo: 1550,
      texto: "Cientos de caraqueños han protestado durante dos noches consecutivas en el marco del llamamiento de la oposición a no reconocer la legitimidad del jefe del Estado, a quien consideran un “usurpador” tras haber obtenido su reelección en unos comicios tildados de fraudulentos y no reconocidos por numerosos países."
    },
    {
      codigo: 2,
      nombre: "Juan",
      apellido: "Gutierrez",
      sueldo: 2000,
      texto: "Hola como."
    },
    {
      codigo: 3,
      nombre: "Fernanda",
      apellido: "Dina",
      sueldo: 3550,
      texto: "Cientos de caraqueños han protestado durante dos noches consecutivas en el marco del llamamiento de la oposición a no reconocer la legitimidad del jefe del Estado, a quien consideran un “usurpador” tras haber obtenido su reelección en unos comicios tildados de fraudulentos y no reconocidos por numerosos países."
    },
    {
      codigo: 4,
      nombre: "Roselin",
      apellido: "Suarez",
      sueldo: 9550,
      texto: "Como estas mejor que siempre bien venrdad."
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
