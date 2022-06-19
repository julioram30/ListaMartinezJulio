import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent implements OnInit {

  public titulos:string[];
  public dato:string="nada seleccionado";
  public nombres:string[]=["Julio A Martinez","Jorge Palacio Barcinilla","Mariano Alvez","Pablo Garcia"];
  public flag:boolean=false;

  constructor() {
    this.titulos=["el dato que se encuestra en el componete ts es",
                "y cambia al seleccionar un elemento de la lista"
    ]
   }

  ngOnInit(): void {
  }

  selecciona(itemSeleccionado:string){
    this.dato=itemSeleccionado;
    //this.dato=String(this.flag);
    this.flag=true;
  }

 
}



