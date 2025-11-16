import { Component } from '@angular/core';
import {MatChip} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {MatMiniFabButton} from "@angular/material/button";

@Component({
  selector: 'app-projects',
  imports: [
    MatChip,
    MatIconModule,
    MatMiniFabButton
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  openLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
