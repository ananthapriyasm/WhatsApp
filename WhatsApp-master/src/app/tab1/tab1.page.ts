import { FormsModule } from '@angular/forms';
import { AfterViewInit, Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonAvatar, IonItem, IonText, IonBadge, IonIcon, IonFabButton, IonFab, IonChip, IonInput, IonPopover, IonButton, IonButtons, IonNote } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { call,people,home, cameraOutline, search, playCircle, radio, library, chatbubbleOutline, peopleOutline, callOutline, chatboxOutline, ellipsisVertical, chatboxEllipses, chatboxEllipsesOutline, archiveOutline, lockClosedOutline } from 'ionicons/icons';
import { AnimationItem } from 'lottie-web'; 
import Lottie from 'lottie-web';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonNote, IonButtons, IonButton, IonPopover, IonInput, IonChip, IonFab, IonFabButton, IonIcon, IonBadge, IonText, IonItem, IonAvatar, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,RouterLink,FormsModule,CommonModule],
})
export class Tab1Page implements AfterViewInit{
  lottieConfig: any;
  animation: AnimationItem | null = null;
  getParamValue : any;
  constructor(private route:ActivatedRoute ,private router:Router) {
    addIcons({archiveOutline,lockClosedOutline,chatboxOutline,chatboxEllipses,call,people,home,cameraOutline,search,playCircle,radio,library,chatbubbleOutline,peopleOutline,callOutline,ellipsisVertical});

  }
  ngAfterViewInit(): void {
    this.initializeLottieAnimation(); 
    this.getParamValue=this.route.snapshot.paramMap.get('name');
     
 
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
contacts=[
  {
   
    name:"Anantha",
    img:"../../assets/icon/karsten-winegeart-cXH9DeiMOS4-unsplash.jpg",
    msg:"hello",
    date:"Today",
    checked:"false"

  
  },{
    name:"karthi",
    img:"../../assets/icon/julio-lopez-eSFwqJFQYq4-unsplash.jpg",
    msg:"hi there",
    date:'11-09-2024',
    badge:"false",
    badges:'5'
      
    },
    {
      name:"amutha",
      img:"../../assets/icon/lukas-parnican-FqrbIJd81qI-unsplash.jpg",
      msg:"hi there",
      date:'18-04-2024',
      
      },
      {
        name:"Julian Everhart",
        img:"../../assets/icon/janis-dzenis-ooYgpUxmia4-unsplash.jpg",
        msg:"hi there",
        date:"23-03-2024",
        checked:"true"
      },{
        name:" Charlotte",
        img:"../../assets/icon/dominic-kurniawan-suryaputra-oDcHvy6fdbI-unsplash.jpg",
        msg:"hi there",
        date:"23-08-2024",
      },
      {
        name:"Arabella Rosewood",
        img:"../../assets/icon/Team Work Sign Vector White Icon Stock Vector (Royalty Free) 666930460 _ Shutterstock_files/sasha-matveeva-pUGo43Q-vwE-unsplash.jpg",
        msg:"hi there",
        date:"04-10-2024",
        badge:"false",
        
    badges:'2'
      },
      {
        name:"Isabella",
        img:"../../assets/icon/dwayne-joe-cOeTMCIBRuQ-unsplash (1).jpg",
        msg:"hi there",
        date:"31-07-2024",
        checked:"true"

      },
      {
      name:"soffia",
      img:"../../assets/icon/dynamic-wang-vPWmSM2laFI-unsplash.jpg",
      msg:"hi there",
      date:"26-08-2024"
      },
      {
        name:"Sebastian Alexander",
        img:"../../assets/icon/marcus-ganahl-8q6eFLyMeqU-unsplash.jpg",
        msg:"hi there",
        date:"03-10-2024",
              },
        {
        name:"kelix",
    img:"../../assets/icon/julio-lopez-eSFwqJFQYq4-unsplash.jpg",
    msg:"hi there",
    date:"31-07-2024"         
  },
  {
    name:"John",
    img:"../../assets/icon/janis-dzenis-ooYgpUxmia4-unsplash.jpg",
    msg:"hi there",
    date:"23-03-2024"
  },
{
  name:"shino",
  img:"../../assets/icon/janis-dzenis-ooYgpUxmia4-unsplash.jpg",
 msg:"hi there",
  date:"26-08-2024"
  
}
]
openChat(contactName:string,img:string) {
  this.router.navigate(['/chats', contactName,img]); // Navigates to the chat page with contact ID
}
}