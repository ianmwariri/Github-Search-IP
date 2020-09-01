export class User {
    userID: number;
    userLoginName: string;
    userName: string;
    userProfileURL: string;
    userAvatar: string;
    userEmail: string;
    userBio: string;
    userRepoCount: number;
    userCompany: string;
    userLocation: string;
    userFollowers: number;
    userFollowing: number;
    userCreationDate: string;

    constructor(){
        this.userID=0;
        this.userLoginName="";
        this.userName="";
        this.userProfileURL="";
        this.userAvatar="";
        this.userEmail="";
        this.userBio="";
        this.userRepoCount=0;
        this.userCompany="";
        this.userLocation="";
        this.userFollowers=0;
        this.userFollowing=0;
        this.userCreationDate="";
    }
}