import { Component, OnInit,ElementRef, ViewChild, EventEmitter, Output} from '@angular/core';
import {Ingrediant} from '../../shared/ingrediant.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name') name:ElementRef;
  @ViewChild('amount') amount :ElementRef;
  @Output() ingrediant =new EventEmitter<Ingrediant>();
    constructor() { }
  
    ngOnInit() {
    }
    onAddItem()
    {
      const ingNAme = this.name.nativeElement.value;
      const ingAmount = this.amount.nativeElement.value;
      const newIngrd = new Ingrediant(ingNAme,ingAmount)
      this.ingrediant.emit(newIngrd);
    }
  }

