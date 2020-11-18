import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';
import data from '../data/profile.json';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profile: Profile = new Profile();

  constructor() {
    this.profile = data;
   }

   getProfile(): Profile {
     return this.profile;
   }
}
