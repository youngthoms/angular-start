import { Component } from '@angular/core';
import { ContactService } from './contact.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts!:any;
  constructor(private contactService: ContactService) {
    this.contactService = contactService;
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

}
