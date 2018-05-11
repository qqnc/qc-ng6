import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CategoryService } from './_services/category.service';
import { Category } from './_models/category';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { SearchService } from './_services/search.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  private sub: any;
  private routeSub: any;
  loading: Boolean;
  keywords: String;
  constructor(private _router: Router, private _searchService: SearchService) {
    this.loading = true;
  }

  ngOnInit() {
    this.sub = this._searchService.search.subscribe(
      (keywords) => {
        setTimeout(() => { this.keywords = keywords; }, 0);
      }
    );
  }
  ngAfterViewInit() {

    this.routeSub = this._router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
            this.loading = true;
        } else if (
            event instanceof NavigationEnd ||
            event instanceof NavigationCancel
            ) {
            this.loading = false;
        }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.routeSub.unsubscribe();
  }

  onSubmit(f: NgForm) {
    this._router.navigate(['/search', f.value.keywords]);
  }
}
