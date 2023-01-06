import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
  //outputs:['mudouValor']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  incrementa(){
    this.valor++;
    // this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa(){
    this.valor--;
    // this.campoValorInput.nativeElement.value--; // usa como referencia o número que foi definido no input e mostra no console quantas vezes ele foi 'diminuido'
    this.mudouValor.emit({novoValor: this.valor})
  }

}
