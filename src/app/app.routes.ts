import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ABoutComponent } from './about/about.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    // {path:'Project',component:ProjectsComponent},
    {path:'Home',component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'about',component:ABoutComponent},

    {path:'projects',component:ProjectsComponent},


];
