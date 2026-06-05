import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

import { Project } from '../../../../shared/models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterLink, DatePipe],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent {
  project = input.required<Project>();
}
