import { CommentsService } from './_services/comment.service';
import { ClickStopPropagation } from './_directives/click.stop.propagation.directive';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxScreensizeModule } from './modules/ngx-screensize/index';
import { AuthService } from './auth/_services/auth.service';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { ModalService } from './_services/modal.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
import { NgPipesModule } from 'ngx-pipes';
import { MomentModule } from 'ngx-moment';
// import { NgxPageScrollModule } from 'ngx-page-scroll';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';
// import { ResponsiveModule } from 'ngx-responsive';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { CategoryService } from './_services/category.service';
// import { IndexComponent } from './pages/index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseService } from './_services/course.service';
import { CoursesResolver } from './pages/index/courses.resolver';
import { CategoryResolver } from './pages/index/category.resolver';
import { CatCourseResolver } from './pages/category/cat.course.resolver';
import { SearchResolver } from './pages/search/search.resolver';
import { SearchService } from './_services/search.service';
import { MetaModule, MetaStaticLoader, PageTitlePositioning, MetaLoader } from '@ngx-meta/core';
// import { SafePipe } from './_pipes/safe.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ConfirmService } from './_services/confirm.service';
import { CourseResolver } from './pages/course/course.resolver';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { AddThisService } from './_services/addthis.service';
import { FacebookModule } from 'ngx-facebook';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgxCaptchaModule } from 'ngx-captcha';
import { RoleService } from './_services/role.service';
import { EventBrokerService } from './_services/event.broker.service';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { AddScriptService } from './_services/addscript.service';
import { FavService } from './_services/favorite.service';
import { PipesModule } from './_pipes/pipes.module';


const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'college.qnap.com'
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#f1d600'
    }
  },
  revokable: true,
  content: {
    dismiss: 'Agree'
  },
  layout: 'cc-qnap',
  layouts: {
    'cc-qnap': '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>{{dismiss}}',
  },
  elements: {
    message: 'This site uses cookies in order to improve ' +
      'your user experience and to provide content tailored ' +
      'specifically to your interests. By continuing to browse our site you agree to our use of cookies, <a href="//www.qnap.com/go/privacy-notice" target="_blank">Data Privacy Notice</a> and <a href="//www.qnap.com/terms-of-use" target="_blank">Terms of Use / Service</a>',
  }
};

export function metaFactory(): MetaLoader {
  return new MetaStaticLoader({
    pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
    pageTitleSeparator: ' - ',
    applicationName: 'QNAP College',
    defaults: {
      title: 'QNAP College',
      description: 'High-Quality Online Courses! Free for everyone who would like to learn more about how to use QNAP as your private cloud storage.',
      'og:image': 'https://www.qnap.com/i/_index/en-us/images/indexSect-spe1-bkd.jpg',
      'og:type': 'website',
      'og:locale': 'en_US',
      'og:locale:alternate': 'en_US,nl_NL,tr_TR'
    }
  });
}


@NgModule({
  declarations: [
    AppComponent,
    MaintenanceComponent,
    ClickStopPropagation
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'qnap-college' }),
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PipesModule,
    NgPipesModule,
    MomentModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    AuthModule,
    PagesModule,
    DeviceDetectorModule.forRoot(),
    NgxScreensizeModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot(),
    NgPipesModule,
    InfiniteScrollModule,
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: (metaFactory)
    }),
    FacebookModule.forRoot(),
    ReactiveFormsModule,
    NgxPageScrollCoreModule.forRoot()
  ],
  providers: [
    CategoryResolver,
    CategoryService,
    AddThisService,
    CourseService,
    CoursesResolver,
    CatCourseResolver,
    SearchResolver,
    SearchService,
    ModalService,
    AuthService,
    CourseResolver,
    RoleService,
    EventBrokerService,
    CommentsService,
    AddScriptService,
    FavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
