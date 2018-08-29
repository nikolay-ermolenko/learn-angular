import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public loading = false;

  public listTypes: string[] = [
    'Hotel',
    'Fishing',
    'Tours',
    'Weather'
  ];

  constructor() { }

  public ngOnInit(): void {

    setTimeout(() => {
      this.loading = true;
    }, 3000);
  }

}
