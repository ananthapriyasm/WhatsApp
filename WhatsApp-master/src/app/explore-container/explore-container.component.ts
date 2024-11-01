import { IonHeader, IonToolbar, IonTitle, IonIcon,IonButtons, IonButton, IonContent, IonSearchbar, IonChip, IonFab,IonInput, IonFabButton, IonItem, IonAvatar, IonLabel,IonBadge,IonList ,IonText,IonSelect,IonSelectOption,IonPopover} from '@ionic/angular/standalone';
import { AfterViewInit, Component, Input } from '@angular/core';
import{IonicModule}from'@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import { addIcons } from 'ionicons';
import { AnimationItem } from 'lottie-web'; 
import Lottie from 'lottie-web';
import { call,people,home, cameraOutline, search, playCircle, radio, library, chatbubbleOutline, peopleOutline, callOutline, chatboxOutline, ellipsisVertical, chatboxEllipses, chatboxEllipsesOutline, archiveOutline} from 'ionicons/icons';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  standalone: true,
  imports: [IonHeader,IonToolbar,IonIcon,IonTitle,IonButtons,IonButton,IonContent,IonSearchbar,IonChip,IonFab,IonFabButton,IonItem,IonAvatar,IonLabel,IonBadge,IonInput, MatIconModule,IonList,IonText,IonSelect,IonSelectOption,IonPopover,RouterLink],
})
export class ExploreContainerComponent  {
 


  
  constructor() {
  }
  


}