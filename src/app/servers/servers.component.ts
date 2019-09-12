import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {}

  ngOnInit() {}

  createServer() {
    if (this.serverName !== '') {
      this.serverCreated = true;
      this.servers.push(this.serverName);
      return true;
    }
  }
}
