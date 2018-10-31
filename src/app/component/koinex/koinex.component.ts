import { Component, OnInit } from '@angular/core';

import { KoinexClass } from '../../class/koinex-class';
import { KoinexService } from '../../services/koinex/koinex.service';



@Component({
  selector: 'app-koinex',
  templateUrl: './koinex.component.html',
  styleUrls: ['./koinex.component.css']
})
export class KoinexComponent implements OnInit {

  constructor(private koinexService: KoinexService) { }

  varKoinex :KoinexClass;
  id;

  ngOnInit() {

    console.log("OnInit Started..........")
    this.showKoinex();
     
     this.id= setInterval(a=>{
        this.showKoinex();
      },30000,[]);
      
      console.log("OnInit Ended..........")
    }


  showKoinex(){
    this.koinexService.getKoinex().subscribe((data:KoinexClass)=>{
      console.log("hello buddy");
      this.varKoinex=data;
      });
      
    }

    /*stop setInterval() when user navigate away (by routing) to another component?
    https://stackoverflow.com/questions/37116619/angular-2-setinterval-keep-running-on-other-component

    */
    ngOnDestroy()
    {
      if(this.id)
      {
        clearInterval(this.id);
      }
    };
    

}
