import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  datos: any = {Nombre: "Proyecto", Apellido: "Dos", Edad: 31, Documento: "2432424"};

  constructor() { }

  ngOnInit() {
  }

}
