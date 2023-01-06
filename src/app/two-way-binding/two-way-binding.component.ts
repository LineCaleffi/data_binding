import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  nome: string = 'abc';
  nome2: string = 'cdb';

  pessoa:  any ={
    nome: 'digite o nome',
    sobrenome:'digite o sobrenome',
    idade: 0,
  }
  constructor() { }

  ngOnInit(): void {
  }
 
}
