import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { SearchService } from '../search-service/search.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private SearchService:SearchService) { }

  user:Users;
  userName: string;

  //Function to fetch
  searchUser(){
    this.user = this.SearchService.user
    this.SearchService.getUserData(this.userName);
  }

  ngOnInit(): void {
  }

}
