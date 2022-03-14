export class Business {
  constructor(entityId = 0, name = "", identificationNumber = "", expirationDate = "", contactName = "",contactMail = "", ipAddress= "", logo="" ) {
    this.entityId = entityId;
    this.name = name;
    this.identificationNumber = identificationNumber; 
    this.expirationDate = expirationDate; 
    this.contactName = contactName; 
    this.contactMail = contactMail; 
    this.ipAddress = ipAddress;
    this.logo = logo; 
  }

  entityId: number;
  name: string;
  identificationNumber: string;
  expirationDate: string;
  contactName: string;
  contactMail: string;
  ipAddress: string;
  logo: string;
}
