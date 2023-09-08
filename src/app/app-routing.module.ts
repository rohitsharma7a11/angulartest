import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './core/guard/auth.guard';
import { DocumentDetailsComponent } from './components/document-details/document-details.component';
import { DocumentUploadComponent } from './components/document-upload/document-upload.component';
import { docResolver } from './core/resolvers/doc.resolver';
 
const routes: Routes = [
  
  {path:'auth',component:AuthComponent},
  {path:'',canActivateChild:[authGuard], children:[
    {path:'',component:DashboardComponent},
    {path:'document-details/:id',component:DocumentDetailsComponent,resolve:{docResolver:docResolver}},
    {path:'document-upload',component:DocumentUploadComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
