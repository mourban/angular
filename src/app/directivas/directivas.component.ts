import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})

export class DirectivasComponent implements OnInit {
  temporal: any;
  categorias: any = [{codigo:0, nombre: "Todos"}, {codigo:1, nombre: "Seguridad"}, {codigo:2, nombre: "Política"}, {codigo:3, nombre: "Partidos"}, {codigo:4, nombre: "Educación"}];
  noticias: any = [
    {
      categoria: {codigo:1, nombre: "Seguridad"},
      titulo: "692 educadores egresaron este martes de la Micromisión Simón Rodríguez", 
      texto: "El presidente de la República, <strong>Nicolás Maduro</strong>, encabeza este martes el acto de graduación de profesores de la <strong>Micromisión Simón Rodríguez</strong>, en el marco del<strong> Día del Maestro</strong>.</p><p>El jefe de Estado en el marco de el primer acto de graduación de profesores de la Micromisión Simón Rodríguez, nombró a la cúpula de la Universidad Experimental del Magisterio, que entre ellos están: “la profesora Belkis Bigott como rectora; Lenin Romero , secretario; Vicerectora, Dubraska Torcat y Armando Rojas como Vicerector para la transición a la comunalización de la educación” expresó que esta palabra deriva de las comunas fue una idea del Ministro de Educación Aristóbulo Istúriz.</p><p>Asimismo invitó a trabajar para tener cada día una educación cada vez más Bolivariana y Robinsoniana, y acotó que la derecha nunca gobernaría para darle educación gratuita al pueblo.</p>",
      imagen: "https://www.definicionabc.com/wp-content/uploads/comunicacion/Educador.jpg"
    },
    {
      categoria: {codigo:2, nombre: "Seguridad"},
      titulo: "692 educadores egresaron este martes de la Micromisión Simón Rodríguez", 
      texto: "El presidente de la República, <strong>Nicolás Maduro</strong>, encabeza este martes el acto de graduación de profesores de la <strong>Micromisión Simón Rodríguez</strong>, en el marco del<strong> Día del Maestro</strong>.</p><p>El jefe de Estado en el marco de el primer acto de graduación de profesores de la Micromisión Simón Rodríguez, nombró a la cúpula de la Universidad Experimental del Magisterio, que entre ellos están: “la profesora Belkis Bigott como rectora; Lenin Romero , secretario; Vicerectora, Dubraska Torcat y Armando Rojas como Vicerector para la transición a la comunalización de la educación” expresó que esta palabra deriva de las comunas fue una idea del Ministro de Educación Aristóbulo Istúriz.</p><p>Asimismo invitó a trabajar para tener cada día una educación cada vez más Bolivariana y Robinsoniana, y acotó que la derecha nunca gobernaría para darle educación gratuita al pueblo.</p>",
      imagen: "https://www.definicionabc.com/wp-content/uploads/comunicacion/Educador.jpg"
    },
    {
      categoria: {codigo:3, nombre: "Seguridad"},
      titulo: "692 educadores egresaron este martes de la Micromisión Simón Rodríguez", 
      texto: "El presidente de la República, <strong>Nicolás Maduro</strong>, encabeza este martes el acto de graduación de profesores de la <strong>Micromisión Simón Rodríguez</strong>, en el marco del<strong> Día del Maestro</strong>.</p><p>El jefe de Estado en el marco de el primer acto de graduación de profesores de la Micromisión Simón Rodríguez, nombró a la cúpula de la Universidad Experimental del Magisterio, que entre ellos están: “la profesora Belkis Bigott como rectora; Lenin Romero , secretario; Vicerectora, Dubraska Torcat y Armando Rojas como Vicerector para la transición a la comunalización de la educación” expresó que esta palabra deriva de las comunas fue una idea del Ministro de Educación Aristóbulo Istúriz.</p><p>Asimismo invitó a trabajar para tener cada día una educación cada vez más Bolivariana y Robinsoniana, y acotó que la derecha nunca gobernaría para darle educación gratuita al pueblo.</p>",
      imagen: "https://www.definicionabc.com/wp-content/uploads/comunicacion/Educador.jpg"
    },
    {
      categoria: {codigo:2, nombre: "Seguridad"},
      titulo: "692 educadores egresaron este martes de la Micromisión Simón Rodríguez", 
      texto: "El presidente de la República, <strong>Nicolás Maduro</strong>, encabeza este martes el acto de graduación de profesores de la <strong>Micromisión Simón Rodríguez</strong>, en el marco del<strong> Día del Maestro</strong>.</p><p>El jefe de Estado en el marco de el primer acto de graduación de profesores de la Micromisión Simón Rodríguez, nombró a la cúpula de la Universidad Experimental del Magisterio, que entre ellos están: “la profesora Belkis Bigott como rectora; Lenin Romero , secretario; Vicerectora, Dubraska Torcat y Armando Rojas como Vicerector para la transición a la comunalización de la educación” expresó que esta palabra deriva de las comunas fue una idea del Ministro de Educación Aristóbulo Istúriz.</p><p>Asimismo invitó a trabajar para tener cada día una educación cada vez más Bolivariana y Robinsoniana, y acotó que la derecha nunca gobernaría para darle educación gratuita al pueblo.</p>",
      imagen: "https://www.definicionabc.com/wp-content/uploads/comunicacion/Educador.jpg"
    }
  ];

  constructor() { 
    this.temporal = this.noticias;
  }

  ngOnInit() {
  }

  eventoSelectorNoticias(evento){
    if (evento.target.value == 0){
      this.noticias = this.temporal;
    }else{
      this.noticias = this.temporal.filter( (item) => {
        console.log(item.categoria.codigo)
        console.log(evento.target.value)
        return item.categoria.codigo == evento.target.value;
      });
    }
    console.log(this.noticias);
  }
}
