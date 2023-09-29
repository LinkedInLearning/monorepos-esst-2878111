import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FeatureComponent } from '@my-monorepo/feature-a';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, FeatureComponent],
  selector: 'my-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-monorepo';
}
