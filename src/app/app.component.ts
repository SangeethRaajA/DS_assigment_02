import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  calendarPlugins = [dayGridPlugin];

  title = 'ONLINE ORGANIZATION';

  EventData = [
    { date : '2020-04-20' , time: '05:30', title: 'Wedding'},
    { date : '2020-04-17' , time : '01:30' , title : 'walk'},
  ];

  model: any = {};
  model2: any = {};
  msg: any="";
  msg2: any="";
  msg3: any="";


  AddEvent()
  {
    this.EventData.push(this.model);
    this.model = {};
    console.log(this.EventData);
    this.msg = "event is added successfully";
    // console.log(this.msg);
  }

  DeleteEvent(i){
    this.EventData.splice(i, 1);
    this.msg3 = "event is deleted successfully";
    // console.log(this.msg);
  }

  EditEvent(u){
    this.model2.date = this.EventData[u].date;
    this.model2.time = this.EventData[u].time;
    this.model2.event = this.EventData[u].title;
    this.myValue = u;
  }

  myValue;
  UpdateEvent(){
    const k = this.myValue;
    for (let i = 0; i < this.EventData.length; i++){
      if (i == k){
        this.EventData[i] = this.model2;
        this.model2 = {};
        this.msg2 = "event is updated successfully";
        // console.log(this.msg);
      }
    }
  }

  clickMe(){
    this.msg="";
  }

  clickMe2(){
    this.msg2="";
  }

  clickMe3(){
    this.msg3="";
  }
}
