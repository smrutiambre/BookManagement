import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { book } from '../bookmodel';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.scss'
})
export class UpdateBookComponent implements OnInit {
  public bookId!: string;
  public bookData: book = {} as book;
  constructor(private api: ApiService, private activatedRoute: ActivatedRoute, private route: Router) {

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: Params) => {
      this.bookId = param['id'];
    })
    this.api.fetchdata(this.bookId).subscribe((data: book) => {
      this.bookData = data;
      console.log(data);
    })
  }

  public updatebook()
  {
    this.api.updatebook(this.bookData,this.bookId).subscribe((res:book)=>{
      alert("Book updated successfully");
      this.route.navigate(['/booklist']);
    })
  }

}
