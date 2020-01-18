import { Component } from '@angular/core';
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skeleton';

  constructor(private apiService: ApiserviceService) { }
  
  searchterm;
  summary;
  buttonclick() {
      this.apiService.getSummary(this.searchterm.toLowerCase()).subscribe((data)=>{
        this.summary=data['extract']
      },
      err => {
        this.summary='We could not find any results for the given search'
      });
    }
}
