import { Component } from '@angular/core';
import { SharedModule } from '../shared.module';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [SharedModule, FormsModule],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {
  name:string = '';

  onNoClick(){
    
  }
}
