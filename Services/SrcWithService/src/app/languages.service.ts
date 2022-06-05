import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  constructor() { }

  // Write method in service class which returns array 
 // of batch details
 GetLanguagesDetails()
 {
  return [
     {"Name":"C","Year":"1972","DevelopedBy":"Dennis Ritchie","Description":"generally regarded as the first high-level programming language"},
     {"Name":"SQL","Year":"1972","DevelopedBy":"Donald D. Chamberlin and Raymond F","Description":"This language was used for viewing and changing data stored in databases."},
     {"Name":"Objective-C","Year":"1983","DevelopedBy":"Brad Cox and Tom Love","Description":"main language used for writing Apple software"},
     {"Name":"C++","Year":"1983","DevelopedBy":"Bjarne Stroustrup","Description":"This is one of the most used languages in the world."},
     {"Name":"Java","Year":"1995","DevelopedBy":"Sun Microsystems","Description":"originally intended to be used with hand-held devices."},
     {"Name":"C#","Year":"2000","DevelopedBy":"Microsoft","Description":" C# as a combination of C++ and Visual Basic. C# is similar to Java in some ways."},
  ];
 }
}
