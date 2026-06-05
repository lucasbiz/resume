import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-project-skeleton',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <div
      class="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 animate-pulse"
    >
      <div class="h-5 bg-gray-200 dark:bg-slate-700 rounded w-3/4 mb-4"></div>
      <div class="h-3 bg-gray-200 dark:bg-slate-700 rounded w-full mb-2"></div>
      <div class="h-3 bg-gray-200 dark:bg-slate-700 rounded w-5/6 mb-4"></div>
      <div class="flex gap-2 mb-4">
        <div class="h-5 bg-gray-200 dark:bg-slate-700 rounded-full w-16"></div>
        <div class="h-5 bg-gray-200 dark:bg-slate-700 rounded-full w-20"></div>
      </div>
      <div class="flex items-center gap-4 mb-4">
        <div class="h-4 bg-gray-200 dark:bg-slate-700 rounded w-12"></div>
        <div class="h-4 bg-gray-200 dark:bg-slate-700 rounded w-12"></div>
      </div>
      <div class="h-3 bg-gray-200 dark:bg-slate-700 rounded w-1/3 mb-4"></div>
      <div class="flex gap-3">
        <div class="h-8 bg-gray-200 dark:bg-slate-700 rounded w-20"></div>
        <div class="h-8 bg-gray-200 dark:bg-slate-700 rounded w-20"></div>
      </div>
    </div>
  `,
})
export class ProjectSkeletonComponent {}
