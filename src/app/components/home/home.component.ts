import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchText: string = '';
  cardsData: any = [];

  constructor(private commonServ: CommonService) {}

  ngOnInit(): void {}
  getInputSearch(data: any) {
    this.commonServ
      .fetchSearchData(data)
      .subscribe({
        next: (data: any) => {this.cardsData = data;
        console.info(this.cardsData)},
        error: (error) => console.error('Error is', error),
        complete: () => console.log('Data Fetched'),
      });
  }
}
