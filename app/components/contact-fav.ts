import {Component, Input} from '@angular/core';
import {ContactModel} from  '../models/ContactModel'

@Component({
  selector: 'contact-item',
  templateUrl: './app/templates/contact-item.html',
  styleUrls: ['./app/styles/contacts.css']
})

export class ContactItem {
  @Input() contactDetails:ContactModel;

  constructor () {

  }


}
