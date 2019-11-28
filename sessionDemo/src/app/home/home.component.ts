import { Component, OnInit, Inject } from '@angular/core';
import{ Router,RouterModule} from '@angular/router';
import{ LOCAL_STORAGE,WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage:WebStorageService,
  private router:Router) { }

sessionVal;
address;
test(){
  this.sessionVal="diyab";
}
  ngOnInit() {
    this.sessionVal = this.storage.get("username");
  if(this.sessionVal == '')
  {
    this.router.navigate(['']);
  }
  else
    {
    if(this.sessionVal =='maharifa')
    {
      this.address = "cherevathodi,chalavara";
    }
    else if(this.sessionVal == 'rasool')
    {
      this.address = "upasana,ottapalam";
    }
    else
    {
      this.router.navigate([''])
    }
  }
    
}
logout(){
  this.storage.remove("username");
  this.router.navigate(['']);
}
}

