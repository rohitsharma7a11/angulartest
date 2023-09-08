import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DocumentService } from 'src/app/core/services/document.service';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent {
  constructor(private documentService:DocumentService,private router:Router){
   
  }
  images:any;
  uploadDoc = new FormGroup({
    name: new FormControl('Abhi', Validators.required,),
    img: new FormControl('', [Validators.required]),
  })
  base64String: any;
  base64Image: any;

get f (){
  return this.uploadDoc.controls
}
  onFileChange(event: any) {
    const allowFileType = ['image/jpeg', 'image/png', 'image/jpg'];
    const allowFileSize = 300000 //300 kb
    if (event.target.files.length > 0) {
      for (let img of event.target.files) {
        if (!allowFileType.includes(img.type) || img.size > allowFileSize) {
          if (!allowFileType.includes(img.type)) {
              this.uploadDoc.controls['img'].setErrors({ incorrect: `invalid File Type :- ${img.name}  (only jpeg jpg and png)` })
          }
          if (img.size > allowFileSize) {
              this.uploadDoc.controls['img'].setErrors({ invalidSize: `invalid File size :- ${Math.trunc(img.size / 1024)} kb  (only < 300kb allowed)` })
          }
          
          return
        }
      }
      this.images = event.target.files[0];
      this.convertToBase64()
      // console.log(this.images)
    }
  }
  convertToBase64() {

    if (!this.images) {

      return;

    }

    const reader = new FileReader();

    reader.readAsDataURL(this.images);

    reader.onload = () => {
      this.base64Image = reader.result as string;
    };

  }

  

  create(){
    console.log(this.uploadDoc.value)
    
    this.documentService.getAll().subscribe((rec:any)=>{
      console.log(rec.length)
      let data = {
        id: rec.length + 1,
        name: this.uploadDoc.value.name,
        img:this.base64Image
      }
      this.documentService.add(data).subscribe((rec)=>{
        console.log(rec,"rec------")
        this.router.navigate([''])
      })
      })
  }
}
