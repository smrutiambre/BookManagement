import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { book } from '../bookmodel';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {
  data: undefined | book[]
  constructor(private api: ApiService) {

  }
  ngOnInit(): void {
    this.getBook();
  }

  public getBook() {
    this.api.getBook().subscribe(res => {
      this.data = res;
    });
  }

  public delete(id: string){
   
    this.api.deleteBook(id).subscribe(res=> {
      alert("Book deleted successfully");
      this.getBook();
    })
  }
  

}
