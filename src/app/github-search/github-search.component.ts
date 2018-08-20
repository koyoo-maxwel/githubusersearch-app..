import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
  username: string = 'koyoo-maxwel';

  @Output() onSearchUser = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  searchUser(username: string) {
    this.onSearchUser.emit(username);
  }

}
