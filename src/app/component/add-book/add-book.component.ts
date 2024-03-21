import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { book } from '../bookmodel';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent implements OnInit {
  bookForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder, private router: Router,private api: ApiService){

  }
  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      bookName: ['',Validators.required],
      author: ['',Validators.required],
      ratings: ['',Validators.required],
      publishDate: ['',Validators.required]
    })
  }

 public submitBook(data: book){
    console.log(data);
    this.api.addBook(data).subscribe((res=> {
      this.bookForm.reset();
      this.router.navigate(["/booklist"]);
    }))

  }

}
