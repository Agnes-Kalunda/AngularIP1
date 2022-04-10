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

  getNewQuotes:()=> void =(): void =>{
    const idx = Math.floor(Math.random()*this.quotesList.length)
    const newQuotes = this.quotesList[idx];
    this.quotes= newQuotes;
  };

  constructor(){}

  ngOnInit(){
    this.fetchData();
  }
  fetchData() {
    throw new Error('Method not implemented.');
  }

  async fetchData(): Promise<void>{
    const quoteURL=
  }
}
