import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectDetailComponent } from './features/projects/pages/project-detail/project-detail.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'projects/:repositoryName', component: ProjectDetailComponent},
];
