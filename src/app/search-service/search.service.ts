import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { rejects } from 'assert';

import { Users } from '../users'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  user: Users;

  getUserData(userName:string){
    interface ApiResponse{
      login: string,
      id: number,
      avatar_url: string,
      public_repos: number
    }
    let promise = new Promise<void>((resolve, reject)=>{
      this.http.get<ApiResponse>(`https://api.github.com/users/${userName}`).toPromise().then(response=>{
        this.user.login = response.login;
        this.user.id = response.id;
        this.user.avatar_url = response.avatar_url;
        this.user.public_repos = response.public_repos;

        resolve()
    },
    error=>{
      this.user.login = 'User not found'
      console.log("An error occured")
      reject(error)
    })
    })
    return promise;
  }

  constructor( private http: HttpClient) { }
}
