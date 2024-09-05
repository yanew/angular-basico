import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente15-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './componente15-form.component.html',
  styleUrl: './componente15-form.component.css'
})
export class Componente15FormComponent {

  nome:string = '';

  @Output() funcao = new EventEmitter<string>();

  cadastrarNome(){
    this.funcao.emit(this.nome);
  }

}
