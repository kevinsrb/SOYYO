import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  business: string[];


  constructor() {
    this.business = ['Tuya', 'Bancolombia', 'Mi Aguila', 'Seguros Continental', 'SoyYo', 'Creditek', 'Sufi Bancolombia', 'Entidad Demo', 'Creditek', 'Tuya']
   }

  ngOnInit() {
  }

  checks = []


  agregar(data: number) { 
    this.checks.push(data);
    console.log(this.checks)
  }

  quitar(data: number) { 
    this.checks = this.checks.filter(s => s !== data);
    console.log(this.checks)
  }

  

  

}
