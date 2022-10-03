import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

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
}


