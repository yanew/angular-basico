import { Component } from '@angular/core';
import { Componente15FormComponent } from "../componente15-form/componente15-form.component";
import { Componente15TabelaComponent } from "../componente15-tabela/componente15-tabela.component";

@Component({
  selector: 'app-componente15',
  standalone: true,
  imports: [Componente15FormComponent, Componente15TabelaComponent],
  templateUrl: './componente15.component.html',
  styleUrl: './componente15.component.css'
})
export class Componente15Component {

  nomes:string[] = ['Yane', 'Bruna', 'Nancy', 'Glynnis', 'Mara'];

  cadastrar(nome:string){
    this.nomes.push(nome);
  }

}
