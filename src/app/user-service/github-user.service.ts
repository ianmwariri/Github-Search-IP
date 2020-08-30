import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Repo } from '../repo';


@Injectable({
  providedIn: 'root'
})
export class GithubUserService {
  user = new User();
  allRepos: Repo[] = [];
  userName: string = "";
  fullURL: string;
  repoUrl: string;

  generateURL(searchedName: string){
    this.fullURL = (environment.apiUrl+"/users/"+searchedName+"?access_token="+environment.apiKey)
    this.repoUrl = (environment.apiUrl+"/users/"+searchedName+"/repos?access_token="+environment.apiKey);
  }

  profileSearch(){
    interface userResponse {
      id: number;
      login: string;
      name: string;
      html_url: string;
      avatar_url: string
      email: string;
      bio: string;
      public_repos: number;
      company: string;
      location: string;
      followers: number;
      following: number;
      created_at: string;
    }

    let userPromise = new Promise((resolve,reject)=>{
      this.http.get<userResponse>(this.fullURL).toPromise().then(response =>{
        this.user.userID = response.id;
        this.user.userLoginName = response.login;
        this.user.userName = response.name;
        this.user.userProfileURL = response.html_url;
        this.user.userAvatar = response.avatar_url;
        this.user.userEmail = response.email;
        this.user.userBio = response.bio;
        this.user.userRepoCount = response.public_repos;
        this.user.userCompany = response.company;
        this.user.userLocation = response.location;
        this.user.userFollowers = response.followers;
        this.user.userFollowing = response.following;
        this.user.userCreationDate = response.created_at;
        
        resolve();
      },err=>{
        reject(err)
      })
    });

    return userPromise;
  }

  repoSearch(){
    interface repoResponse {
      id: number;
      name: string;
      html_url: string;
      description: string;
      created_at: string;
      updated_at: string;
      homepage: string;
      language: string;
    }

    let repoPromise = new Promise((resolve,reject)=>{
      this.http.get<repoResponse[]>(this.repoUrl).toPromise().then(response=>{
        for(let i: number = 0; i<response.length;i++){
          let repo = new Repo();
          repo.ID = response[i].id;
          repo.name = response[i].name;
          repo.gitURL = response[i].html_url;
          repo.descr = response[i].description;
          repo.creationDate = response[i].created_at;
          repo.updateDate = response[i].updated_at;
          repo.homePage = response[i].homepage;
          repo.lang = response[i].language; 
          this.allRepos.push(repo);  
        };

        resolve();
      },err=>{
        reject(err);
        console.log(err);
      })
    });
    return repoPromise;
  }

  getUser(id){
    if(id == this.user.userLoginName){
      return this.user;
    }
  }

  getRepos(){
    return this.allRepos;
  }
  constructor(private http: HttpClient) { }
}
