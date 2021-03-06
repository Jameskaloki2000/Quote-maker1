import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from 'src/app/model/quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css'],
})
export class QuoteFormComponent implements OnInit {
  newQuotes = new Quotes('', '', '', new Date());

  @Output() addQuote = new EventEmitter<Quotes>();

  submitQuote(quoteForm) {
    const saveQuote: Quotes = Object.assign({}, this.newQuotes);
    this.addQuote.emit(saveQuote);
    quoteForm.resetForm();
  }

  constructor() {}

  ngOnInit(): void {}
}
