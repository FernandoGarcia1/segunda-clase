import { Component, OnInit } from '@angular/core';
import { CompartidoService } from 'src/app/services/compartido.service';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {

  
  constructor(private compartidoService: CompartidoService) { }

  ngOnInit(): void {
    this.buttonClick();
  }



  

  public buttonClick() {    
    let button = document.getElementById('btn-1');
    button?.addEventListener("click",()=>{
      this.compartidoService.name = 'Fer';
      this.compartidoService.email = 'email@fer.com';
      console.log('componente 1 ',this.compartidoService)
    })
  
    
  }
  
}
