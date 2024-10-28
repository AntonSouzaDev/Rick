import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RickandmortyService } from './services/rickandmorty.service';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';

export interface character {
  name?: string;
  status?: string;
  species?: string;
  gender?: string;
  episode?: Array<string>;
  image?: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'rickandmorty';
  characters?: character[] = [];
  prev: string = '';
  next: string = '';

  constructor(private rickandmortyService: RickandmortyService) { }

  ngOnInit(): void {
    // REQUISÇÃO
    this.rickandmortyService.getCharacters().subscribe(
      (data) => {
        this.characters = data.results; // Salva a lista de personagens
        this.prev = data.info.prev;
        this.next = data.info.next;
      },
      (error) => {
        console.error('Erro ao carregar os personagens:', error);
      }
    );
  }
  
  //FUNCAO ANTES E DPS
  // DEPOIS
  nextPage():void {
    this.rickandmortyService.getCharactersFromUrl(this.next).subscribe(
      (data) => {
        this.characters = data.results; // Salva a lista de personagens
        this.prev = data.info.prev;
        this.next = data.info.next;
      },
      (error) => {
        console.error('Erro ao carregar os personagens:', error);
      }
    );
  }
  // ANTES
  previusPage():void {
    this.rickandmortyService.getCharactersFromUrl(this.prev).subscribe(
      (data) => {
        this.characters = data.results; // Salva a lista de personagens
        this.prev = data.info.prev;
        this.next = data.info.next;
      },
      (error) => {
        console.error('Erro ao carregar os personagens:', error);
      }
    );
  }
}
