import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  name: string;
  email: string;
  phone: string;

  constructor() {
    this.name = '',
    this.email = '',
    this.phone = ''
   }

  ngOnInit(): void {
  }

}
