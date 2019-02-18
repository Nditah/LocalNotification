import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  horizontalText = `this is the text to show scroll horizontal,
  and default is scroll horizontal. you don't need to set the direction`;

  items: Array<any>;

  constructor(
      private router: Router,
      public itemService: ItemService
  ) {
  }

  ngOnInit() {
    this.items = this.itemService.getItems();
    setTimeout(() => {
      this.horizontalText = `this is the text to show that text could be refreshed.
      but this feature support horizontal scroll only!`;
    }, 5000);
  }


}
