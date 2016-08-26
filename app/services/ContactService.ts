import {Component, Injectable} from '@angular/core';
import {ContactModel} from '../models/ContactModel';
// to use this service in our components we need to use the @Injectable() decorator.
@Injectable()

export class ContactService {

  //we are defining a function that will return us the data(in this case,
  //inline-data we entered to the contactsArray variable
  getContacts() {
    return this.contactsArray;
  }

  //we are defining a function that gets a contact object and pushes it into the array
  saveContact(newContact:ContactModel){
    this.contactsArray.push(newContact);
  }

  //here we are defining the contatsArray variable with our inline-data
  // this could be transformed to getting data from database, ajax calls to other api's and more..
  contactsArray:ContactModel[] = [{
    name: 'Sharon',
    phone: '111',
    email : 'lala@lala.com',
    isFavourite : true
  },{
    name: 'Dana',
    phone: '222',
    email : 'lili@lala.com',
    isFavourite : false
  },{
    name: 'Shuli',
    phone: '111',
    email : 'lala@lala.com',
    isFavourite : true
  },{
    name: 'Daniel',
    phone: '222',
    email : 'lili@lala.com',
    isFavourite : false
  },{
    name: 'Shoshana',
    phone: '111',
    email : 'lala@lala.com',
    isFavourite : true
  },{
    name: 'Danit',
    phone: '222',
    email : 'lili@lala.com',
    isFavourite : false
  },{
    name: 'Shimrit',
    phone: '111',
    email : 'lala@lala.com',
    isFavourite : true
  },{
    name: 'Donna',
    phone: '222',
    email : 'lili@lala.com',
    isFavourite : false
  },
  ]
}
