import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts = [
    {
      id : 12,
      nom : "DJO 1",
      email : "d1@gmail.com",
      note : 12,
    },
    {
      id : 13,
      nom : "DJO 2",
      email : "d2@gmail.com",
      note : 5,
    },
    {
      id : 14,
      nom : "DJO 4",
      email : "d4@gmail.com",
      note : 17,
    },
    {
      id : 15,
      nom : "DJO 5",
      email : "d5@gmail.com",
      note : 6,
    },
  ]

  constructor() { }

  getContacts() {return this.contacts;}
}
