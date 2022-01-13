import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  data: any;

  constructor() {}

  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        'title': 'Title',
        'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat sapiente incidunt voluptatum obcaecati eius amet perspiciatis eveniet nostrum labore quidem. Dicta quas obcaecati nemo unde dolorem facilis non veniam autem!',
      };
    }, 1000);
  }

  ngOnInit() {
  }

}
