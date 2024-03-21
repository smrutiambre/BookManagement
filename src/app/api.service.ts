import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { book } from './component/bookmodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public addBook(data: book) {
    return this.http.post<book>("http://localhost:3000/posts", data);
  }

  public getBook() {
    return this.http.get<book[]>("http://localhost:3000/posts");
  }

  public deleteBook(id: string) {
    return this.http.delete<book>("http://localhost:3000/posts/" + id);
  }

  //fetching data on edit
  public fetchdata(id: string) {
    return this.http.get<book>("http://localhost:3000/posts/" + id);
  }

  public updatebook(data: book, id: string) {
    return this.http.put<book>("http://localhost:3000/posts/" + id, data);
  }
}
