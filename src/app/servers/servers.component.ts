import { Component, OnInit } from '@angular/core';

@Component({
//selector: '[app-servers]',
//selector: '.app-servers',
//id selectors or pseudoselectors do not work here
selector: 'app-servers',
templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationMessage = 'No server was created';
  serverName = '';
  username = '';
  allowNewUsername = false;
  serverCreated = false;

  constructor() {
    setTimeout(()=>{
        this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationMessage = this.serverName + ' server was successfully created!'
  }

  onUpdateServerName( event : Event){
      this.serverName = (<HTMLInputElement>event.target).value;
      //Explicit casting with the HTML Element
  }

  onCreateUsername(){
    this.username = '';
  }

  checkUsername(){
   this.username != ''? this.allowNewUsername = true : this.allowNewUsername = false;
   return this.allowNewServer;
  }
}
