import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { GithubService } from '../../core/services/github.service';
import { ProjectCardComponent } from '../../features/projects/components/project-card/project-card.component';
import { ProjectSkeletonComponent } from '../../features/projects/components/project-skeleton/project-skeleton.component';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, ProjectCardComponent, ProjectSkeletonComponent],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private githubService = inject(GithubService);

  projects$ = this.githubService.getProjects();

  currentYear: Number = new Date().getFullYear()

  refresh(): void {
    this.githubService.refreshProjects();
    this.projects$ = this.githubService.getProjects();
  }
}

