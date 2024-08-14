import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente11',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente11.component.html',
  styleUrl: './componente11.component.css'
})
export class Componente11Component {

    form = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
      cidade: new FormControl('')
    });

    btnCadastrar:boolean = true;

    vetor:Pessoa[] = [];
    indice:number = -1;

    cadastrarPessoa(){
      //cadastro no vetor
      this.vetor.push(this.form.value as Pessoa);
      //limpar inputs
      this.form.reset();
      //visualizacao via console web
      //console.table(this.vetor);  
    }

    selecionarPessoa(indice:number){
        this.indice = indice;

        this.form.setValue({
          nome:this.vetor[indice].nome,
          idade:this.vetor[indice].idade,
          cidade:this.vetor[indice].cidade
      });

      this.btnCadastrar = false;  
    }

    alterarPessoa(){
      this.vetor[this.indice] = this.form.value as Pessoa;
      this.resetar();
    }

    removerPessoa(indice:number){
      this.indice = indice;
      this.vetor.splice(this.indice,1);
      this.resetar();
    }

    resetar(){
      this.form.reset(); 
      this.btnCadastrar = true; 
    }



}
