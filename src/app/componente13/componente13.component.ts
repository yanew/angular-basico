import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto.service';

@Component({
  selector: 'app-componente13',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente13.component.html',
  styleUrl: './componente13.component.css'
})
export class Componente13Component {
  vetor:Produto[] = [];

  btnCadastrar:boolean = true;

  constructor(private servico:ProdutoService){}

  //Inicializacao do componente13
  ngOnInit(){
    this.selecionar();
  }

  selecionar(){
    this.servico.selecionar().subscribe(retorno => {this.vetor = retorno});
  }

}
