import { Component } from '@angular/core';
import { SharedModule } from '../shared.module';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [SharedModule, FormsModule],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {
  name:string = '';

  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>){
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
