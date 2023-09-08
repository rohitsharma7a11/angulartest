import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DocumentService } from 'src/app/core/services/document.service';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.css']
})
export class DocumentDetailsComponent {
  constructor(private documentService: DocumentService, private activatedRoute:ActivatedRoute, private router:Router) {

    this.activatedRoute.params.subscribe((params: any) => {
      let id = params.id
      console.log(id, "parma data")

      if(!id){
        this.router.navigate(['']);
        return;
      }


      this.documentService.getById(id).subscribe((rec: any) => {
        console.log(rec.body)
        this.data = rec
      })

    })
   }
   
  data:any;
}
