import { TestBed } from '@angular/core/testing';

import { GithubUserService } from './github-user.service';

// describe('GithubUserService', () => {
//   let service: GithubUserService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(GithubUserService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

describe('GitUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubUserService = TestBed.get(GithubUserService);
    expect(service).toBeTruthy();
  });
});

