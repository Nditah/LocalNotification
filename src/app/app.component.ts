import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {BackgroundMode} from '@ionic-native/background-mode/ngx';
// import {ELocalNotificationTriggerUnit} from '@ionic-native/local-notifications/ngx';

import {ELocalNotificationTriggerUnit, LocalNotifications} from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
      private platform: Platform,
      private splashScreen: SplashScreen,
      private statusBar: StatusBar,
      private backgroundMode: BackgroundMode,
      private localNotification: LocalNotifications,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.backgroundMode.on('activate').subscribe(() => {
        console.log('ASD');
        this.notification();
        setInterval(() => {
          this.callInit();
        }, 15000);
      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.backgroundMode.enable();
    });
  }

  private notification() {
    this.localNotification.schedule({
      text: 'asd',
      title: 'asd',
      foreground: true,
      trigger: {every: ELocalNotificationTriggerUnit.MINUTE}
    });
  }

  callInit() {
    this.localNotification.schedule({
      text: 'EVERY 15 sec',
      title: 'asd',
      foreground: true
    });
  }
}
