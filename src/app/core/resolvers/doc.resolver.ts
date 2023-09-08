import { ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { DocumentService } from '../services/document.service';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http'

export const docResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot, documentService: DocumentService = inject(DocumentService)): Observable<any> => {

  return inject(DocumentService).getById(route.paramMap.get("id")).pipe(catchError((errorResponse) => handleError(errorResponse)))
};

const handleError = (errorResponse: HttpErrorResponse) => {
  
  console.log(errorResponse,"error-------")
  if (errorResponse) {
    if(errorResponse.status == 404){
      console.log("hello-------")
      let _router = inject(Router)

    _router.navigate([''])
    

    }

  }

  return of(null);
};
