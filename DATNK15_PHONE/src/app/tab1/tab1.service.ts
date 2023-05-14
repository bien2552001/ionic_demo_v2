import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Tab1Service {

  BaseUrl = "http://192.168.1.82"

  constructor(private http: HttpClient) { }
  //---------------------------------------------------------------------------------------------Moment---------------------------------------------------------------------
  //-------------------------------------DTSU66--------------------------------------------------------
  //---------------Điện áp pha,Điện áp dây, Dòng điện pha ----------------

  DTSU666_uimoment(): Observable<any> {
    const startDate = moment().startOf('day').format("YYYY-MM-DDTHH:mm:ss");
    const endDate = moment().endOf('day').format("YYYY-MM-DDTHH:mm:ss");
    const url = `${this.BaseUrl}/dtsu666?&Fields=Ua,Ub,Uc,Uab,Ubc,Uca,Ia,Ib,Ic&start=${startDate}&end=${endDate}`;
    return this.http.get(url);
  }
  //---------------Công suất theo pha: p,q ; Cosphi ; Hz ----------------
  DTSU666_pqphimoment(): Observable<any> {
    const startDate = moment().startOf('day').format("YYYY-MM-DDTHH:mm:ss");
    const endDate = moment().endOf('day').format("YYYY-MM-DDTHH:mm:ss");
    const url = `${this.BaseUrl}/dtsu666?&Fields=Pft,Pfa,Pfb,Pfc,Qft,Qfa,Qfb,Qfc,Cosft,Cosfa,Cosfb,Cosfc,Hz&start=${startDate}&end=${endDate}`;
    return this.http.get(url);
  }
  //-------------Công suất -------------------
  DTSU666_amoment(): Observable<any> {
    const startDate = moment().startOf('day').format("YYYY-MM-DDTHH:mm:ss");
    const endDate = moment().endOf('day').format("YYYY-MM-DDTHH:mm:ss");
    const url = `${this.BaseUrl}/dtsu666?&Fields=A_sum,A_imp,A_exp,Q1,Q2,Q3,Q4&start=${startDate}&end=${endDate}`;
    return this.http.get(url);
  }

  //---------------------------------------------------------------------PZEM-017------------------------------
  // Điện áp
  Pzem017_uipamoment(): Observable<any> {
    const startDate = moment().startOf('day').format("YYYY-MM-DDTHH:mm:ss");
    const endDate = moment().endOf('day').format("YYYY-MM-DDTHH:mm:ss");
    const url = `${this.BaseUrl}/pzem017?&Fields1=U1,I1,P1,A1&Start1=${startDate}&End1=${endDate}`;
    return this.http.get(url);
  }
  //-----------------------------------------------------------------------------------Hết moment------------------------------------------------------------------


}
