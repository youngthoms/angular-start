import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-liste-contacts',
  templateUrl: './liste-contacts.component.html',
  styleUrls: ['./liste-contacts.component.css']
})
export class ListeContactsComponent implements OnInit {
  @Input()
  contacts!:any;
  constructor() {}
  ngOnInit(): void {}
}
