import { Component,OnInit} from '@angular/core';

interface Quotes {
  quote : string;
  author : string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  loading : boolean = true;
  title = 'Quotes';
  quotes!: Quotes;
  quotesList!:Quotes[];
  tweetURL!: string;
}
