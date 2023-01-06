import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(){
    alert('Botão Clicado');
  }

  onKeyUp(evento: KeyboardEvent){
    console.log((<HTMLInputElement>evento.target).value); // desse jeito mostra no console o que foi escrito no input
    this.valorAtual = (<HTMLInputElement>evento.target).value; // desse jeito mostra o valor no browser e não no console

    //HTMLInputElement -> Fornece propriedades e métodos especiais para manipular as opções, layout e apresentação de elementos.
  }
  salvarValor(valor: any){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
}
