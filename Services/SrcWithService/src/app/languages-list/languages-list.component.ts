import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../languages.service';

@Component({
  selector: 'app-languages-list',
  templateUrl: './languages-list.component.html',
  styleUrls: ['./languages-list.component.css']
})
export class LanguagesListComponent implements OnInit {

  //create empty array to hold the list of languages.
  public Languages:any = [];

  //Add the instance of service in side constructor
  constructor(private _languageservice: LanguagesService) 
  {

  }

  //call the service method once in ngOnInit method
  ngOnInit()
  {
     this.Languages = this._languageservice.GetLanguagesDetails();
  }

}
