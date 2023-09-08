import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from 'src/app/core/services/document.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
pageData:any

  constructor(private router: Router,private documentService:DocumentService) {
this.documentService.getAll().subscribe((rec)=>{
  this.pageData = rec
})
   }
  logout() {
    localStorage.clear()
    this.router.navigate(['auth'])

  }
  
}
