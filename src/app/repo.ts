export class Repo {
        public ID: number;
        public name: string;
        public gitURL: string;
        public descr: string;
        public creationDate: string;
        public updateDate: string;
        public homePage: string;
        public lang: string
        
    constructor(){
                this.ID = 0;
                this.name = "";
                this.gitURL = "";
                this.descr = "";
                this.creationDate = "";
                this.updateDate = "";
                this.homePage = "";
                this.lang = "";
            }
    }