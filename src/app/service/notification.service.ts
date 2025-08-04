import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { NotificationType } from '../enum/notification-type.enum';

@Injectable({providedIn: 'root'})
export class NotificationService {

  constructor(private notifier: NotifierService) { }

  public notify(type: NotificationType, message: string) {
    this.notifier.notify(type, message);
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> ade89ae9f7018bacc1d4125b69fa3224a5a44422
