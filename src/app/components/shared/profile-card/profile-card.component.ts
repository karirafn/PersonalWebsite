import { Component, OnInit } from '@angular/core';
import { faFacebookSquare, faGithub, faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Profile } from 'src/app/models/profile-model';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  profile: Profile = new Profile();
  faLinkedin: IconDefinition = faLinkedin;
  faFacebook: IconDefinition = faFacebookSquare;
  faGithub: IconDefinition = faGithub;
  faMobile: IconDefinition = faMobileAlt;
  faEnvelope: IconDefinition = faEnvelope;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.profile = this.profileService.getProfile();
  }

}
