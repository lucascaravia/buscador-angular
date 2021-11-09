import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/service/character.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {
  characters: Array<{name: string, img: string, char_id: number}> = [];
  constructor(private service: CharacterService) { }
  
  async ngOnInit() {
    const allCharacters: any = await this.service.getAll();
    this.characters = allCharacters;
    console.log(this.characters);
  }
  
  character: string='';
  searchResult: Array<{name: string, img: string, char_id: number}> = [];

  submitBtn() {
    this.searchResult = this.characters.filter(item => item.name === this.character)
    this.character = '';
    console.log(this.searchResult)
  }


}