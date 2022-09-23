import { Component, OnInit } from '@angular/core';
import { CompartidoService } from 'src/app/services/compartido.service';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.scss']
})
export class DosComponent implements OnInit {

  constructor(public compartidoService : CompartidoService) { }

  ngOnInit(): void {    
    this.buttonUpdate();
  }

  getInputs(){
    let name : HTMLInputElement = <HTMLInputElement>document.getElementById('name') //cast with <>
    let email : HTMLInputElement = document.getElementById('email') as HTMLInputElement //cast with as
    console.log(name)
    console.log(email)
    console.log('componente 2 ', this.compartidoService)
    name.value = this.compartidoService.name
    email.value = this.compartidoService.email
  }

  buttonUpdate(){
    let update = document.getElementById('update');
    update?.addEventListener('click', () =>{
      this.getInputs();
    })
  }

}
