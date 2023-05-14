import { Component } from '@angular/core';
import { Tab1Model } from './tab1.model';
import { Tab1Service } from './tab1.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  selectedTab: string = 'tab1';

  //---------------------Thẻ Moment-------------------------
  public dtsu_ngay: Array<Tab1Model> = [];
  public dtsu1_ngay: Array<Tab1Model> = [];
  public dtsu2_ngay: Array<Tab1Model> = [];
  public pzem_ngay: Array<Tab1Model> = [];

  constructor(private menuservice: Tab1Service) { }

  ngOnInit() {
    //---------------------Thẻ Moment--------------------
    this.DTSU666_ui_moment();
    this.DTSU666_pqphi_moment();
    this.DTSU666_a_moment();
    this.Pzem017_uipa_moment();
  }

  handleRefresh(event:any) {
    setTimeout(() => {
      this.DTSU666_ui_moment();
      this.DTSU666_pqphi_moment();
      this.DTSU666_a_moment();
      this.Pzem017_uipa_moment();
      event.target.complete();
    }, 5000);
  }
  //---------------------Thẻ Moment--------------------
  DTSU666_ui_moment() {
    this.menuservice.DTSU666_uimoment()
      .subscribe(cs => {
        this.dtsu_ngay = cs;
      });
  }

  DTSU666_pqphi_moment() {
    this.menuservice.DTSU666_pqphimoment()
      .subscribe(cs => {
        this.dtsu1_ngay = cs;
      });
  }

  DTSU666_a_moment() {
    this.menuservice.DTSU666_amoment()
      .subscribe(cs => {
        this.dtsu2_ngay = cs;
      });
  }

  Pzem017_uipa_moment() {
    this.menuservice.Pzem017_uipamoment().subscribe(da => {
      this.pzem_ngay = da;
    })
  }

}
