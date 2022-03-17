import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent {
    serverId: number = Math.ceil(Math.random()*100);
    serverStatus: string = 'offine';
    passwordIsShown :boolean = false;
    clicks = [];
    colorChanged :boolean = false;

constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
}
    getServerStatus() : string{
        return this.serverStatus;
    }

    getColor(): string {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    onShowPassword(): void{
        this.passwordIsShown = !this.passwordIsShown;
        //this.clicks.push((this.clicks.length+1))
        this.clicks.push(new Date())
        this.clicks.length >= 4 ? this.colorChanged = true : this.colorChanged = false;
    }
}