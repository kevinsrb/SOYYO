import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Business } from "../models/business";

@Injectable({
  providedIn: "root",
})
export class Business_infoService {
  selectedBusines: Business;
  business: Business[] = [];
  readonly URL_API = "https://awovcw7p76.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities";

  constructor(private http: HttpClient) {
    this.selectedBusines = new Business();
  }

  getBusinesByEntityId(entityId: number) {
    console.log(this.URL_API + `/${entityId}`)
    return this.http.get<Business[]>(this.URL_API + `/${entityId}`);
  }

  deleteBusines(entityId: any){
    const arr = this.business.filter(item => item.entityId !== entityId);
    this.business = arr;
  }

  

}
