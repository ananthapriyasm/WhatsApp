import { Component } from '@angular/core';
import{IonicModule}from'@ionic/angular';
import { add, pencilOutline } from 'ionicons/icons';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MatIconModule } from '@angular/material/icon';
import { addIcons } from 'ionicons';
import { heart,chatbubbleEllipses,call,people,home, camera, search, playCircle, radio, library, chatbubbleOutline, peopleOutline, callOutline, chatboxOutline, ellipsisVertical, chatboxEllipses, chatboxEllipsesOutline} from 'ionicons/icons';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, MatIconModule]
})
export class Tab2Page {

  constructor() {
    addIcons({add,chatboxOutline,pencilOutline,chatboxEllipsesOutline,call,people,home,camera,search,playCircle,radio,library,chatbubbleOutline,peopleOutline,callOutline,ellipsisVertical})
  }

}
