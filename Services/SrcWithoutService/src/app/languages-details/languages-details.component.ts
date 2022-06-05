import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages-details',
  templateUrl: './languages-details.component.html',
  styleUrls: ['./languages-details.component.css']
})
export class LanguagesDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public Languages = 
  [
     {"Name":"C","Year":"1972","DevelopedBy":"Dennis Ritchie","Description":"generally regarded as the first high-level programming language"},
     {"Name":"SQL","Year":"1972","DevelopedBy":"Donald D. Chamberlin and Raymond F","Description":"This language was used for viewing and changing data stored in databases."},
     {"Name":"Objective-C","Year":"1983","Developed_By":"Brad Cox and Tom Love","Description":"main language used for writing Apple software"},
     {"Name":"C++","Year":"1983","DevelopedBy":"Bjarne Stroustrup","Description":"This is one of the most used languages in the world."},
     {"Name":"Java","Year":"1995","DevelopedBy":"Sun Microsystems","Description":"originally intended to be used with hand-held devices."},
     {"Name":"C#","Year":"2000","DevelopedBy":"Microsoft","Description":" C# as a combination of C++ and Visual Basic. C# is similar to Java in some ways."},
  ]

}
