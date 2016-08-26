import {Component, Input} from '@angular/core';
import {ContactModel} from  '../models/ContactModel'

@Component({
  selector: 'contact-item',
  templateUrl: './app/templates/contact-item.html',
  //specify a css file fot styling
  styleUrls: ['./app/styles/contacts.css']
})

export class ContactItem {

  //notice I use the @Input() on the contactDetails variable.
  //angular is looking for an attribute with this name used in this selector, like this:
  // <contact-item [contactDetails]="something"> </contact-item>
  // and then it takes the value from "something" into this variable.
  
  @Input() contactDetails:ContactModel;

  constructor () {

  }


}
