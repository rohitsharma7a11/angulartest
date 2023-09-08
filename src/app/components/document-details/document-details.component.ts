import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DocumentService } from 'src/app/core/services/document.service';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.css']
})
export class DocumentDetailsComponent {
  data:any;

  constructor(private documentService: DocumentService, private activatedRoute:ActivatedRoute, private router:Router) {
    this.activatedRoute.data.subscribe((rec:any)=>{
      this.data = rec.docResolver
    })
   }
   
}
