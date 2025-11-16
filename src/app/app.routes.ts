import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ActivitiesComponent} from "./activities/activities.component";
import {CvComponent} from "./cv/cv.component";
import {PublicationsComponent} from "./publications/publications.component";
import {ProjectsComponent} from "./projects/projects.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'cv', component: CvComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'projects', component: ProjectsComponent }
];
