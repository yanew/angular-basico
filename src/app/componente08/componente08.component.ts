import { Component } from '@angular/core';

@Component({
  selector: 'app-componente08',
  standalone: true,
  imports: [],
  templateUrl: './componente08.component.html',
  styleUrl: './componente08.component.css'
})
export class Componente08Component {

    media:number = 4;
    nomes:string[] = ['Yane', 'Nancy', 'Bruna', 'Glynnis', 'Mara'];
    linguagem:string = 'Java';
}
