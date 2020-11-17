import { Component, Input, OnInit } from '@angular/core';
import { faFacebookSquare, faGithub, faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  @Input() name: string;
  @Input() title: string;
  @Input() email: string;
  @Input() phone: string;
  @Input() facebookProfile: string;
  @Input() githubProfile: string;
  @Input() linkedInProfile: string;
  @Input() image: string;
  faLinkedin: IconDefinition = faLinkedin;
  faFacebook: IconDefinition = faFacebookSquare;
  faGithub: IconDefinition = faGithub;
  faMobile: IconDefinition = faMobileAlt;
  faEnvelope: IconDefinition = faEnvelope;

  constructor() {
    this.name = '';
    this.title = '';
    this.email = '';
    this.phone = '';
    this.facebookProfile = '';
    this.githubProfile = '';
    this.linkedInProfile = '';
    this.image = '';
  }

  ngOnInit(): void {
  }

}
