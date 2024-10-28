import { AfterViewInit, Component, Input } from '@angular/core';
import{IonicModule}from'@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import { addIcons } from 'ionicons';
import { AnimationItem } from 'lottie-web'; 
import Lottie from 'lottie-web';
import { call,people,home, cameraOutline, search, playCircle, radio, library, chatbubbleOutline, peopleOutline, callOutline, chatboxOutline, ellipsisVertical, chatboxEllipses, chatboxEllipsesOutline} from 'ionicons/icons';
@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  standalone: true,
  imports: [IonicModule, MatIconModule,],
})
export class ExploreContainerComponent implements AfterViewInit {
  lottieConfig: any;
  animation: AnimationItem | null = null;
  constructor() {
    addIcons({chatboxOutline,chatboxEllipses,call,people,home,cameraOutline,search,playCircle,radio,library,chatbubbleOutline,peopleOutline,callOutline,ellipsisVertical})
  }
  ngAfterViewInit(): void {
    this.initializeLottieAnimation();  
 
}
initializeLottieAnimation() {
  const element = document.getElementById('lottie-animation') as HTMLElement;
  if (element) {
    this.animation = Lottie.loadAnimation({
      container: element, 
      path: 'assets/icon/Animation - 1729917354150.json',
      renderer: 'svg', 
      loop: true,
      autoplay: true,
    });
  }
}


animationCreated(animationItem: AnimationItem) {
  console.log('Animation created:', animationItem);
}

}