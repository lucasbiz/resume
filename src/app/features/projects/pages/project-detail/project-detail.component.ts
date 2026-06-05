import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, switchMap, of } from 'rxjs';

import { GithubService } from '../../../../core/services/github.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [AsyncPipe, DatePipe, RouterLink],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './project-detail.component.html',
})
export class ProjectDetailComponent {
  private route = inject(ActivatedRoute);
  private githubService = inject(GithubService);

  project$ = this.route.paramMap.pipe(
    map((params) => params.get('repositoryName')!),
    switchMap((name) => this.githubService.getProject(name)),
  );

  languages$ = this.route.paramMap.pipe(
    map((params) => params.get('repositoryName')!),
    switchMap((name) => this.githubService.getProjectLanguages(name)),
  );

  readme$ = this.route.paramMap.pipe(
    map((params) => params.get('repositoryName')!),
    switchMap((name) => this.githubService.getProjectReadme(name)),
  );
}
