import { Injectable } from "@angular/core";
import {  Observable, Subject } from "rxjs";
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import firebase from 'firebase/compat/app';
import { mergeMapTo } from 'rxjs/operators';
import { LoggerService } from "../../logger/logger.service";

@Injectable()
export class FirebaseService {

    constructor(private afMessaging: AngularFireMessaging, private logger: LoggerService) {

    }

    /**
     * Get push notification
     */
    public get messages$(): Observable<firebase.messaging.MessagePayload> {
        return this.afMessaging.messages;
    }

    public requestPermission(): void {
        this.afMessaging.requestToken
            .subscribe(
                (token) => { this.logger.info('Permission granted! Save to the server!' + token) },
                (error) => { this.logger.error(error) },  
            );
    }
}