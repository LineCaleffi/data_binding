import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  
  url = 'Jornada Digital';
  cursoAngular: boolean = true;

  urlImagem = 'http://lorempixel.com.br/500/400/?1';
  urlImagem2 = 'http://lorempixel.com.br/500/400/?2';

  nomeDoCurso: string ='Angular';
  cursos: string[] = ['JAVA', 'SpringBoot', 'Angular2', 'JavaScript'];
  
  valorInicial = 15;

  constructor() { }

  ngOnInit(): void {
  }

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  onMudouValor(evento: any){
    console.log(evento.novoValor); // quando clica no + ou - mostra o valor no console
  }
}
