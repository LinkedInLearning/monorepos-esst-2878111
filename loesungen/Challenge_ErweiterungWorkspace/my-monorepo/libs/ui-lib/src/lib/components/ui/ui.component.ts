import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-monorepo-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent {}
