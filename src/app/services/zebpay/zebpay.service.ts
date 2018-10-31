import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ZebpayClass } from '../../class/zebpay-class';
import { catchError, map, tap } from 'rxjs/operators';






@Injectable({
  providedIn: 'root'
})
export class ZebpayService {

  constructor(private http: HttpClient) { }

  varZebBtcUrl ='https://www.zebapi.com/api/v1/market/ticker/btc/inr';
  varZebEthUrl= 'https://www.zebapi.com/api/v1/market/ticker/eth/inr';
  varZebLtcUrl= 'https://www.zebapi.com/api/v1/market/ticker/ltc/inr';

  varZebXrpUrl= 'https://www.zebapi.com/api/v1/market/ticker/xrp/inr';
  varZebOmgUrl= 'https://www.zebapi.com/api/v1/market/ticker/omg/inr';
  varZebTrxUrl= 'https://www.zebapi.com/api/v1/market/ticker/trx/inr';

  varZebEosUrl= 'https://www.zebapi.com/api/v1/market/ticker/eos/inr';
  varZebGntUrl= 'https://www.zebapi.com/api/v1/market/ticker/gnt/inr';
  varZebAeUrl= 'https://www.zebapi.com/api/v1/market/ticker/ae/inr';
  varZebZrxUrl= 'https://www.zebapi.com/api/v1/market/ticker/zrx/inr';




//------------------------------------------------------------------------

  getZebBTC(): Observable<ZebpayClass>
  {
    return this.http.get<ZebpayClass>(this.varZebBtcUrl)
 
  };






  getZebEth(): Observable<ZebpayClass>
  {
    return this.http.get<ZebpayClass>(this.varZebEthUrl);
  }



  getZebLtc(): Observable<ZebpayClass>
  {
    return this.http.get<ZebpayClass>(this.varZebLtcUrl);
  }




  //------------------------------------------------------------------------

  getZebXrp(): Observable<ZebpayClass>
  {
    return this.http.get<ZebpayClass>(this.varZebXrpUrl);
  }




  getZebTrx(): Observable<ZebpayClass>
  {
    return this.http.get<ZebpayClass>(this.varZebTrxUrl);
  }

  

  getZebOmg(): Observable<ZebpayClass>
  {
    return this.http.get<ZebpayClass>(this.varZebOmgUrl);
  }



  //------------------------------------------------------------------------


  getZebEos(): Observable<ZebpayClass>
  {
    return this.http.get<ZebpayClass>(this.varZebEosUrl) ;
  }


 


  getZebAe(): Observable<ZebpayClass>
  {
    return this.http.get<ZebpayClass>(this.varZebAeUrl) ;
  }

  getZebZrx(): Observable<ZebpayClass>
  {
    return this.http.get<ZebpayClass>(this.varZebZrxUrl) ;
  }



  getZebGnt(): Observable<ZebpayClass>
  {
    return this.http.get<ZebpayClass>(this.varZebGntUrl) ;
  }





}
