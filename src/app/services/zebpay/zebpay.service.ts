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
        .pipe( 
          catchError(this.errorHandler)
        )
  };



  errorHandler(error : HttpErrorResponse){
    console.error("Hi Pavan :"+error.name);
    return Observable(error.message || "Server Error");
 
  }


  getZebEth(): Observable<ZebpayClass>
  {
    return this.http.get<ZebpayClass>(this.varZebEthUrl).pipe(catchError(this.errorHandler));
  }



  getZebLtc(): Observable<ZebpayClass>
  {
    return this.http.get<ZebpayClass>(this.varZebLtcUrl).pipe(catchError(this.errorHandler));
  }




  //------------------------------------------------------------------------

  getZebXrp(): Observable<ZebpayClass>
  {
    return this.http.get<ZebpayClass>(this.varZebXrpUrl).pipe(catchError(this.errorHandler));
  }




  getZebTrx(): Observable<ZebpayClass>
  {
    return this.http.get<ZebpayClass>(this.varZebTrxUrl).pipe(catchError(this.errorHandler));
  }

  

  getZebOmg(): Observable<ZebpayClass>
  {
    return this.http.get<ZebpayClass>(this.varZebOmgUrl).pipe(catchError(this.errorHandler));
  }



  //------------------------------------------------------------------------


  getZebEos(): Observable<ZebpayClass>
  {
    return this.http.get<ZebpayClass>(this.varZebEosUrl).pipe(catchError(this.errorHandler));
  }


 


  getZebAe(): Observable<ZebpayClass>
  {
    return this.http.get<ZebpayClass>(this.varZebAeUrl).pipe(catchError(this.errorHandler));
  }

  getZebZrx(): Observable<ZebpayClass>
  {
    return this.http.get<ZebpayClass>(this.varZebZrxUrl).pipe(catchError(this.errorHandler));
  }



  getZebGnt(): Observable<ZebpayClass>
  {
    return this.http.get<ZebpayClass>(this.varZebGntUrl).pipe(catchError(this.errorHandler));
  }





}
