import { Component } from '@angular/core';
import {MatChip} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-cv',
  imports: [
    MatChip,
    MatIconModule,
  ],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CvComponent {

}
