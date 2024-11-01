import { Component } from '@angular/core';

import { add, pencilOutline } from 'ionicons/icons';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonButtons, IonButton, IonFab, IonIcon, IonGrid, IonCol, IonRow, IonFabButton, IonAvatar, IonLabel, IonListHeader, IonCard, IonCardHeader, IonCardSubtitle, IonChip, IonText } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MatIconModule } from '@angular/material/icon';
import { addIcons } from 'ionicons';
import { heart,chatbubbleEllipses,call,people,home, camera, search, playCircle, radio, library, chatbubbleOutline, peopleOutline, callOutline, chatboxOutline, ellipsisVertical, chatboxEllipses, chatboxEllipsesOutline} from 'ionicons/icons';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonText, IonChip, IonCardSubtitle, IonCardHeader, IonCard, IonListHeader, IonLabel, IonAvatar, IonFabButton, IonRow, IonCol, IonGrid, IonIcon, IonFab, IonButton, IonButtons, IonItem, IonHeader, IonToolbar, IonTitle, IonContent , MatIconModule]
})
export class Tab2Page {

  constructor() {
    addIcons({add,chatboxOutline,pencilOutline,chatboxEllipsesOutline,call,people,home,camera,search,playCircle,radio,library,chatbubbleOutline,peopleOutline,callOutline,ellipsisVertical})
  }

}
