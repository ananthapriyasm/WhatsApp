import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonAvatar, IonList, IonButtons, IonBackButton, IonButton, IonInput, IonFooter, IonIcon, IonGrid, IonRow, IonCol, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { addIcons } from 'ionicons';
import { attachOutline, add } from 'ionicons/icons';
@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonFab, IonCol, IonRow, IonGrid, IonIcon, IonFooter, IonInput, IonButton, IonBackButton, IonButtons, IonList, IonAvatar, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ChatsPage  implements OnInit{
contactname !:string;
img !:string
  constructor(private route:ActivatedRoute,) {

  addIcons({add,attachOutline});
   }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.contactname = params.get('name') || "";
      this.img = params.get("img") ||"";
    });
  }
}

