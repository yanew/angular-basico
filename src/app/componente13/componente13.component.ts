import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente13',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './componente13.component.html',
  styleUrl: './componente13.component.css'
})
export class Componente13Component {
  vetor:Produto[] = [];

  btnCadastrar:boolean = true;

  form = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(''),
    valor: new FormControl(null)
  });

  constructor(private servico:ProdutoService){}

  //Inicializacao do componente13
  ngOnInit(){
    this.selecionar();
  }

  selecionar(){
    this.servico.selecionar().subscribe(retorno => {this.vetor = retorno});
  }

  cadastrar(){
    this.servico.cadastrar(this.form.value as Produto).subscribe(retorno => {
      this.vetor.push(retorno);
      this.form.reset();
    });
  }

  selecionarProduto(i:number){
    this.form.setValue({
      id: this.vetor[i].id,
      nome: this.vetor[i].nome,
      valor: this.vetor[i].valor
    });

    this.btnCadastrar = false;
  }

  alterarProduto(){
    
    this.servico.alterar(this.form.value as Produto).subscribe(retorno => {
      let indiceAlterado = this.vetor.findIndex(
        obj => {
          return this.form.value.id === obj.id;
        }
      );

      this.vetor[indiceAlterado] = retorno;

      this.btnCadastrar = true;
      this.form.reset();
    });
  }

  removerProduto(){
    this.servico.remover(this.form.value.id).subscribe( () => {

      let indiceRemovido = this.vetor.findIndex(
        obj => {
          return this.form.value.id === obj.id;
        }
      );

      this.vetor.splice(indiceRemovido, 1);
      this.btnCadastrar = true;
      this.form.reset();
    });
  }

}
