import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { 

   }

  ngOnInit() {

    this.route.params.subscribe( params => {
      if (params["id"] != null){
        console.log('llego el parametro id:' + params["id"]);
      }
    });

  }

}
