import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import regular from '@fortawesome/fontawesome-free-regular';
import solid from '@fortawesome/fontawesome-free-solid';

/* ADD libraries from fontawesome */
fontawesome.library.add(brands);
fontawesome.library.add(regular);
fontawesome.library.add(solid);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // set the initial value to true to show loading spinner on first load
  private loading = true;

  public constructor(private titleService: Title, private router: Router) {
    this.titleService.setTitle('Veeya');
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;

    }

    if (event instanceof NavigationEnd) {
      window.scrollTo(0,0);
      this.loading = false;
    }

    if (event instanceof NavigationCancel) {
      this.loading = false;
    }

    if (event instanceof NavigationError) {
      this.loading = false;
    }
  }

}
