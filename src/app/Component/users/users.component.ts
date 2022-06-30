import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersData:any
  resolved:any

  constructor(private serv:ServiceService,private act:ActivatedRoute) { }

  ngOnInit(): void {
    this.users();
    console.log(this.act);
    
    // console.log(this.act.snapshot.data['id']);
    
    // this.resolved = this.res.snapshot.data['data']     // to access resolve property

  }


  users(){
    this.serv.getUsers().subscribe(res=>{
   this.usersData = res;
   console.table(res);
   
      
    })
  }

}
