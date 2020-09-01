import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';
import { ActivatedRoute } from '@angular/router';
import { GithubUserService } from '../user-service/github-user.service';
// import { faMapMarkerAlt, faEnvelope, faCalendarCheck, faEnvelopeOpen, faUserFriends, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
      user: User;
      repos: Repo[] = [];

      // faMapMarkerAlt = faMapMarkerAlt;
      // faEnvelope = faEnvelope;
      // faCalendarCheck = faCalendarCheck;
      // faEnvelopeOpen = faEnvelopeOpen;
      // faUserFriends = faUserFriends;
      // faCheckCircle = faCheckCircle;

  constructor(private route: ActivatedRoute, private userService: GithubUserService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.user = this.userService.getUser(id);
    this.repos = this.userService.getRepos();
  }
}