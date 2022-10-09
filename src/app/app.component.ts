import { Component, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { FirebaseService } from './core/firebase/services/firebase.service';
import { LoggerService } from './core/logger/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'limerick-ecommerce';



  constructor(private firebaseService: FirebaseService, private logger: LoggerService) {
    this.firebaseService.requestPermission();
  }

  ngOnInit() {
    this.firebaseService.messages$
        .pipe(map((message) => {
          return message;
        }))
        .subscribe((message) => {
          this.logger.info(message.notification?.body);
          this.title = message.notification?.title ?? '';
        })
  }

  ngOnDestroy(): void {
    
  }

}
