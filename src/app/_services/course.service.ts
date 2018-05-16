import { AuthService } from './../auth/_services/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../_models/course';

@Injectable()
export class CourseService {
  constructor(private _httpClient: HttpClient, private _authService: AuthService) {
  }
  all(limit?: number): Observable<Course []> {
    let api_query = 'https://go.qnap.com/api/courses?orderBy=publishedDate:desc';
    if (limit) {
      api_query = api_query + '&limit=' + limit;
    }

    const headers = new HttpHeaders().set('Cache-Control', 'no-cache');
    return this._httpClient.get<Course []>(api_query, {headers: headers});
  }

  add(course: Course) {
    const api_query = 'https://go.qnap.com/api/courses';
    return this._httpClient.post(api_query, course, this._authService.jwtHttpClient());
  }

  update(course: Course) {
    const api_query = 'https://go.qnap.com/api/courses';
    return this._httpClient.put(api_query, course, this._authService.jwtHttpClient());
  }

  allByCategory(category: String): Observable<Course []> {
    const api_query = 'https://go.qnap.com/api/category/' + category + '/courses';
    const headers = new HttpHeaders().set('Cache-Control', 'no-cache');
    return this._httpClient.get<Course []>(api_query, {headers: headers});
  }

  get(id: any): Observable<Course> {
    const api_query = 'https://go.qnap.com/api/courses/' + id;
    const headers = new HttpHeaders().set('Cache-Control', 'no-cache');
    return this._httpClient.get<Course>(api_query, {headers: headers});
  }

  getYoutubeInfo(youtubeRef: String): Observable<Course> {
    const api_query = 'https://go.qnap.com/api/courses/' + youtubeRef + '/youtubeinfo';
    const headers = new HttpHeaders().set('Cache-Control', 'no-cache');
    return this._httpClient.get<Course>(api_query, {headers: headers});
  }

  search(query: String): Observable<Course []> {
    if (!query) {
      query = '';
    }
    console.log('search');
    const api_query = 'https://go.qnap.com/api/courses/search?query=' + query;
    const headers = new HttpHeaders().set('Cache-Control', 'no-cache');
    return this._httpClient.get<Course []>(api_query, {headers: headers});
  }
}
