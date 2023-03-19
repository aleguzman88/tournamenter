import { Component } from '@angular/core';


interface Player{
  name: string;
  
}


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  players: Player[] = [
    {
      name: ''
    }
  ];

  createPlayerCount: number = 0; // counter

  createPlayer() {
    const name = prompt('Enter the name of the new Player:');
    
    if  (name) {
      const newPlayer: Player = {
        name: name,
        
      };
      this.players.push(newPlayer);
      this.createPlayerCount++; // Incrementar el contador
      alert(`Player ${newPlayer.name} has been created! This function has been called ${this.createPlayerCount} times.`); // Mostrar el contador
    }
  }

  deletePlayer(players: Player) {
    const confirmDelete = confirm(`Are you sure you want to delete ${players.name}?`);
    if (confirmDelete) {
      const index = this.players.indexOf(players);
      this.players.splice(index, 1);
      alert(`Team ${players.name} has been deleted!`);
    }
  }
}
