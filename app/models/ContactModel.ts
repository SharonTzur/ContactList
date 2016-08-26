//we are defining our contact data model, which includes name as a  string,
// phone as a sting, email as a string and "isFavourite" as a boolean representing it's state(favourite or not)

export class ContactModel {
  constructor(public name:string, public phone:string, public email:string, public isFavourite:boolean) {

  }


}
