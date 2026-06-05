import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { GithubService } from '../../../../core/services/github.service';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { ProjectSkeletonComponent } from '../../components/project-skeleton/project-skeleton.component';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [AsyncPipe, ProjectCardComponent, ProjectSkeletonComponent],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './project-list.component.html',
})
export class ProjectListComponent {
  private githubService = inject(GithubService);

  projects$ = this.githubService.getProjects();

  refresh(): void {
    this.githubService.refreshProjects();
    this.projects$ = this.githubService.getProjects();
  }
}
