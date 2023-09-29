import { Component, inject } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LayoutComponent } from '@my-monorepo/ui-lib';
import { ApiService } from '@my-monorepo/feature-a';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, LayoutComponent],
  selector: 'my-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  apiService = inject(ApiService);
}
