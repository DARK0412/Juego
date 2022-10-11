import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  posicion = true
  constructor() {

    window.scroll = function() {
      var posicion = window.pageYOffset || document.documentElement.scrollTop;
      var elemento1 = document.getElementById("fondo1");
      if (elemento1 != null) {
        elemento1.style.top = -posicion * 0.5 + "px";
      }}
  }
  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event']) 
  comprobar(){
    let pos = window.scrollY <= window.innerHeight*2.1
    if(pos != this.posicion) this.posicion = pos
    
  }
}


