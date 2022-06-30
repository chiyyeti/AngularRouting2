import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
id:any
  constructor(private route:ActivatedRoute) { 
    // this.id = this.route.snapshot.params['id']
  }

  ngOnInit(): void {
console.log(this.route.snapshot.data);

    
  }

}
