import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CvDetailComponent } from './cv-detail/cv-detail.component';
import { CvDetailResolver } from './cv-detail/cv-detail.resolver';

const routes: Routes = [
  {
    path: 'cv-detail/:id',
    component: CvDetailComponent,
    resolve: {
      cv: CvDetailResolver,
    },
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
