import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './components/pages/profile/profile.component';
import { CvComponent } from './components/pages/cv/cv.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'cv', component: CvComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
