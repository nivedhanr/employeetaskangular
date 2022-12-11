import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {
  empcode=""
  task=""
  constructor(private api:ApiService){}
  readValue=()=>{
    let data:any={
      "empcode": localStorage.getItem("userinfo"),
      "task": this.task
      
    }
    this.api.addtask(data).subscribe(
      (response:any)=>{
        console.log(response)

      }
    )
  }
}
