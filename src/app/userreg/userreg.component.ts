import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent {
  empcode=""
  name=""
  address=""
  email=""
  phn=""
  department=""
  password=""
  confirmpass=""
  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"empcode":this.empcode,"name":this.name,"address":this.address,"email":this.email,"phn":this.phn,"department":this.department,"password":this.password,"confirmpass":this.confirmpass}
    console.log(data)
    this.api.addempoloyee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status == "success") {
          alert(" added successfully")
          this.empcode=""
          this.name=""
          this.address=""
          this.email=""
          this.phn=""
          this.department=""
          this.password=""
          this.confirmpass=""
           
        }else{
          alert("Something went wrong")
        }
        }
    )
}
    // if (this.password==this.confirmpass) {
      
    //   alert("successfully Added")
      
    // } else {
    //   alert("check password and confirm password")
    // }
  }

