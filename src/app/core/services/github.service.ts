import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, shareReplay, of, switchMap } from 'rxjs';

import { Project } from '../../shared/models/project.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private http = inject(HttpClient);
  private baseUrl = 'https://api.github.com';
  private username = environment.githubUsername;
  private topic = environment.portfolioTopic;

  private projectsCache$: Observable<Project[]>;

  constructor() {
    this.projectsCache$ = this.fetchProjects().pipe(shareReplay(1));
  }

  private fetchProjects(): Observable<Project[]> {
    return this.http
      .get<any[]>(`${this.baseUrl}/users/${this.username}/repos?per_page=100&sort=updated&direction=desc`)
      .pipe(map((repos) => repos.filter((r) => r.topics?.includes(this.topic)).map((r) => this.toProject(r))));
  }

  getProjects(): Observable<Project[]> {
    return this.projectsCache$;
  }

  refreshProjects(): void {
    this.projectsCache$ = this.fetchProjects().pipe(shareReplay(1));
  }

  getProject(name: string): Observable<Project> {
    return this.http.get<any>(`${this.baseUrl}/repos/${this.username}/${name}`).pipe(map((r) => this.toProject(r)));
  }

  getProjectLanguages(name: string): Observable<string[]> {
    return this.http
      .get<Record<string, number>>(`${this.baseUrl}/repos/${this.username}/${name}/languages`)
      .pipe(map((langs) => Object.keys(langs).sort((a, b) => langs[b] - langs[a])));
  }

  getProjectReadme(name: string): Observable<string> {
    return this.http
      .get<any>(`${this.baseUrl}/repos/${this.username}/${name}/readme`)
      .pipe(map((response) => atob(response.content)));
  }

  private toProject(repo: any): Project {
    return {
      id: repo.id,
      name: repo.name,
      description: repo.description || '',
      htmlUrl: repo.html_url,
      homepage: repo.homepage,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      updatedAt: new Date(repo.updated_at),
      topics: repo.topics || [],
    };
  }
}
