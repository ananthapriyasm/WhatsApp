import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import{IonicModule}from'@ionic/angular';
import { addIcons } from 'ionicons';
import { MatIconModule } from '@angular/material/icon';
import { heart ,chatboxOutline,chatboxEllipsesOutline,call,people,home,camera,search,playCircle,radio,library,chatbubbleOutline,peopleOutline,callOutline,ellipsisVertical} from 'ionicons/icons';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, MatIconModule]
})
export class Tab4Page implements OnInit {

  constructor() {
    addIcons({heart,chatboxOutline,chatboxEllipsesOutline,call,people,home,camera,search,playCircle,radio,library,chatbubbleOutline,peopleOutline,callOutline,ellipsisVertical})
   }

  ngOnInit() {
  }

}
