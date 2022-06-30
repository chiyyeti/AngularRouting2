import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:any;
  

  constructor(private route:ActivatedRoute,private serv : ServiceService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    console.log(id);
    this.serv.getUser(id).subscribe(res=>{
      this.user=res
    })
    
  }

}
