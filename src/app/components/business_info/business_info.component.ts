import { Component, OnInit, Input } from "@angular/core";

import { Business_infoService } from "../../services/business_info.service";
import { NgForm } from "@angular/forms";
import { Business } from "../../models/business";

@Component({
  selector: "app-business_info",
  templateUrl: "./business_info.component.html",
  styleUrls: ["./business_info.component.css"],
  providers: [Business_infoService],
})
export class BusinnessInfoComponent implements OnInit {
  constructor(public business_infoService: Business_infoService) {  
  }
 
  @Input() businessSelecteds: number[];

  ngOnInit() {
    // this.loadInfo();
  }



  getBusines(entityId: number) {
    this.business_infoService.getBusinesByEntityId(entityId).subscribe(({data}) => {
      console.log(data)
      this.business_infoService.business.push(data);
    });
    
  }

  loadInfo(){
    if(this.businessSelecteds.length > 0){
      this.businessSelecteds.forEach((entityId: any) => {
        this.getBusines(entityId)
      });
    }else{
      alert('No has selecionado ninguna empresa')
    }
    
  }

  addBusine(form?: NgForm) {
    console.log(form.value)
  }

  editBusine(business: Business) {
     this.business_infoService.selectedBusines = business;
  }

  deleteBusines(entityId: number, form: NgForm) {
    if (confirm("Are you sure you want to delete it?")) {
      this.business_infoService.deleteBusines(entityId)
      // this.resetForm(form);     
      // this.loadInfo();
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      // this.business_infoService.selectedBusines = new Business();
    }
  }
}
