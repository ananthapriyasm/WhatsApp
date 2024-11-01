import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonCard, IonList, IonCardContent, IonItem, IonThumbnail, IonLabel, IonFab, IonFabButton, IonText, IonIcon, IonGrid, IonRow, IonCol, IonAvatar } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MatIconModule } from '@angular/material/icon';
import{IonicModule}from'@ionic/angular';
import { addIcons } from 'ionicons';
import { heart,call,people,home, camera, search, playCircle, radio, library, peopleOutline, callOutline, ellipsisVertical, chatboxEllipses, chevronForward, chatboxOutline,add} from 'ionicons/icons';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonIcon ,IonToolbar,IonButton,IonButtons,IonContent,IonCardContent,MatIconModule,IonList,IonItem,IonThumbnail,IonLabel,IonCard,IonFab,IonFabButton,IonText,IonGrid,IonRow,IonCol,IonAvatar]
})
export class Tab3Page {
  constructor() {
    addIcons({ chatboxOutline,call,people,home,camera,search,playCircle,radio,library,peopleOutline,callOutline,ellipsisVertical,chevronForward,add})
  }
}
