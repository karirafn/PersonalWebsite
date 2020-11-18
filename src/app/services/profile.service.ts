import { Injectable } from '@angular/core';
import { Profile } from '../models/profile-model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profile: Profile = new Profile();

  constructor() {
    this.profile.name = 'Kári Rafn Karlsson';
    this.profile.title = 'Mechanical Engineer';
    this.profile.email = 'karirafn@gmail.com';
    this.profile.phone = '(+354) 695 3348';
    this.profile.facebookUrl = 'https://www.facebook.com/karirafn/';
    this.profile.githubUrl = 'https://github.com/karirafn';
    this.profile.linkedinUrl = 'https://www.linkedin.com/in/karirafn/';
    this.profile.imagePath = '../../../../assets/img/picture.png';
   }

   getProfile(): Profile {
     return this.profile;
   }
}
