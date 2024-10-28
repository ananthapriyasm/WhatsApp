import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';
import { MatIconModule } from '@angular/material/icon';
import{IonicModule}from'@ionic/angular';
import { camera,heart,chatbubbleEllipses,call,people,home, cameraOutline, search, playCircle, radio, library, chatbubbleOutline, peopleOutline, callOutline, chatboxOutline, ellipsisVertical, chatboxEllipses, chatboxEllipsesOutline} from 'ionicons/icons';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule, MatIconModule],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ chatboxOutline,chatboxEllipsesOutline,call});
  }
}
