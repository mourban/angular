import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  titulo: any = "Hola nuevo titulo de esta seccion";
  @Input ("propiedadHijo") datosHijo : any;

  constructor() { }

  ngOnInit() {
  }

  eventoAngular(){
    console.log("Ejecutamos el evento del boton del formulario");
  }

}
