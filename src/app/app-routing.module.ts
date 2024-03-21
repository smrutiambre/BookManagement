import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './component/book-list/book-list.component';
import { AddBookComponent } from './component/add-book/add-book.component';
import { UpdateBookComponent } from './component/update-book/update-book.component';


const routes: Routes = [
  {path:'booklist', component: BookListComponent},
  {path:'addbook', component: AddBookComponent},
  {path: 'updatebook/:id', component: UpdateBookComponent},
  {path:'', redirectTo:'booklist',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
