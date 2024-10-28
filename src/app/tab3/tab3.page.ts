import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MatIconModule } from '@angular/material/icon';
import{IonicModule}from'@ionic/angular';
import { addIcons } from 'ionicons';
import { heart,chatbubbleEllipses,call,people,home, camera, search, playCircle, radio, library, chatbubbleOutline, peopleOutline, callOutline, chatboxOutline, ellipsisVertical, chatboxEllipses, chatboxEllipsesOutline} from 'ionicons/icons';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, MatIconModule],
})
export class Tab3Page {
  constructor() {
    addIcons({chatboxOutline,chatboxEllipsesOutline,call,people,home,camera,search,playCircle,radio,library,chatbubbleOutline,peopleOutline,callOutline,ellipsisVertical})
  }
}
