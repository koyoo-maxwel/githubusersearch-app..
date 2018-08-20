import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../environments/environment';
import { KoyooMaxwel } from './koyoo-maxwel';
import { Repositories } from './repositories';




@Injectable({
  providedIn: 'root'
)}



export class GithubService {
  private name: string;
  private apiKey: '7e97a4b5c363521f588a50fcb2984dcf7c0e853e';
  private userName: 'koyoo-maxwel';

  constructor(private _http: Http) {
    this.userName = 'koyoo-maxwel';
  }

  getUser() {
    return this._http.get(`http://api.github.com/users/${this.username}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
      (res => res.json());
  }
  getRepos() {
    return this._http.get(`http://api.github.com/users/${this.username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&sort=created`)
      (res => res.json());
  }

  updateUser(username: string) {
    this.username = username;
  }
}
