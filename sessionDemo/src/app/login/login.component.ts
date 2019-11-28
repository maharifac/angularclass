import { Component, OnInit, Inject } from '@angular/core';
import{ Router,RouterModule} from '@angular/router';
import{ LOCAL_STORAGE,WebStorageService } from 'angular-webstorage-service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
constructor(@Inject(LOCAL_STORAGE) private storage:WebStorageService,
private router:Router) { }


  ngOnInit() {

             }
model:any = {}
login(){
    
      if((this.model.username == 'maharifa' && this.model.password =='1234') || (this.model.username =='rasool' && this.model.password=='2468'))
{
  this.storage.set("username",this.model.username);
  this.router.navigate(['home'])
}
    
}
}
