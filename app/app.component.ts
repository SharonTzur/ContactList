import {Component} from '@angular/core';
import {ContactItem} from './components/contact-item';
import {ContactFavourite} from './components/contact-fav';
import {ContactService} from './services/ContactService';
import {ContactModel} from './models/ContactModel';

@Component({
  selector: 'my-app',
  templateUrl: './app/templates/contact-list.html',
  //specify the child-components we're using
  directives: [ContactItem, ContactFavourite],
  //specify the services we're using
  providers: [ContactService]
})
export class AppComponent {
  contactsArr:ContactModel[];
  newName:string = '';
  newPhone:string = '';
  newEmail:string = '';

//notice i use an instance of the service in the constructor (contactService and not ContacService)
  constructor(private contactService:ContactService) {

    //insert the array from the service to a local variable contactArr so I can print it in the template
    this.contactsArr = this.contactService.getContacts();
  }


  //the next function is called when the button "add contact" is clicked,
  // it sends a Contact object to the service saveContact function,
  // and in the service the function pushes it to the contacts array
  addContact() {
    this.contactService.saveContact({
      name: this.newName,
      phone: this.newPhone,
      email: this.newEmail,
      isFavourite: false

    })
  }

}
