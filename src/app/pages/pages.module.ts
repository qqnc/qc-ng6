import { CategoryComponent } from './category/category.component';
import { IndexComponent } from './index/index.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { PagesComponent } from './pages.component';
import { NgPipesModule } from 'ngx-pipes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { SafePipe } from '../_pipes/safe.pipe';
import { RunScriptsDirective } from '../_directives/run.scripts.directives';
import { CourseComponent } from './course/course.component';
import { MomentModule } from 'ngx-moment';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TermsOfUseComponent } from './termsofuse/termsofuse.component';
import { SecurityModule } from '../admin/_directives/security.module';
import { PipesModule } from '../_pipes/pipes.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPageScrollModule,
    PagesRoutingModule,
    MomentModule,
    NgPipesModule,
    InfiniteScrollModule,
    NgxCaptchaModule,
    SecurityModule,
    PipesModule
  ],
  declarations: [
    PagesComponent,
    CategoryComponent,
    SearchComponent,
    NotFoundComponent,
    RunScriptsDirective,
    CourseComponent,
    TermsOfUseComponent,
    IndexComponent,
    SafePipe
  ]
})
export class PagesModule { }
