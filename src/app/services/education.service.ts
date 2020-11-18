import { Injectable } from '@angular/core';
import { Education } from '../models/education';
import data from '../data/education.json';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  education: Education[] = new Array<Education>();

  constructor() {
    this.education = data;
   }

   getEducation(): Education[] {
    return this.education;
   }
}
