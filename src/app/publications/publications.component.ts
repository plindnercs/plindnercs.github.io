import { Component } from '@angular/core';
import {MatChip} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {MatButton, MatIconButton, MatMiniFabButton} from "@angular/material/button";

@Component({
  selector: 'app-publications',
  imports: [
    MatIconModule,
    MatMiniFabButton
  ],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.scss',
})
export class PublicationsComponent {

  openDoi(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
