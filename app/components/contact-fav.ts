import {Component, Input} from '@angular/core';
import {ContactModel} from  '../models/ContactModel'

@Component({
  selector: 'contact-fav',
  templateUrl: './app/templates/contact-fav.html',
  //specify a css file fot styling
  styleUrls: ['./app/styles/contacts.css']
})

export class ContactFavourite {
  //notice I use the @Input() on the contactDetails variable.
  //angular is looking for an attribute with this name used in this selector, like this:
  // <contact-fav [contactDetails]="something"></contact-fav>
  // and then it takes the value from "something" into this variable.
  @Input() contactDetails:ContactModel;

  constructor () {

  }


}
