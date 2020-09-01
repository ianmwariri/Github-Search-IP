import { Component, OnInit } from '@angular/core';
import { GithubUserService } from '../user-service/github-user.service';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;
  userInput: string;

  getUserInput(){
    var trimmedInput = this.userInput;
    return trimmedInput;
  }

  searchUser(form: NgForm){
    if(this.userInput == ""){
      alert("Input something...");
    }
    else {
      this.userService.generateURL(this.userInput);
       
      //reset repositories:
      this.userService.allRepos = []; 
      var userResult = this.userService.profileSearch();
      this.userService.repoSearch();

      if(!userResult){
        //when the promise is rejected, hence:
        alert("Sorry, an unexpected error occured.");
      }
      else {
        //when the promise is accepted:
        this.user = this.userService.user;
        console.log("User: ",this.user)
        setTimeout(()=>{
          this.router.navigate(['/result',this.user.userLoginName]);
        },1000)
      }
      this.userInput="";
      form.reset();
    }  
  }
  constructor(private userService: GithubUserService, private router: Router) { }

  ngOnInit() {
    
  }
}
