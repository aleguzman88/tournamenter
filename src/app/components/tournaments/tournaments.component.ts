import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Team {
  name: string;
  date: string;
  location: string;
  }

  
interface Players {
  name: string;
  players: Players[];
}

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']

})
export class TournamentsComponent {
  teams: Team[] = [
    {
      name: '',
      date: '',
      location: '',
     
    }
  ];
  router: any;

  



  createTeamCount: number = 0; // counter

  createTeam() {
    const name = prompt('Enter the name of the new Team:');
    const date = prompt('Enter the date of the new tournament (e.g. March 20, 2023):');
    const location = prompt('Enter the location of the new tournament:');
    if  (name && date && location) {
      const newTeam: Team = {
        name: name,
        date: date,
        location: location
      };
      this.teams.push(newTeam);
      this.createTeamCount++; // Incrementar el contador
      alert(`Team ${newTeam.name} has been created! This function has been called ${this.createTeamCount} times.`); // Mostrar el contador
    }
  }



  editTeam(team: Team) {
    const newName = prompt(`Enter a new name for ${team.name}:`);
    const newDate = prompt(`Enter a new date for ${team.date}:`);
    const newLocation = prompt(`Enter a new location for Tournament:`);
    if (newName && newDate && newLocation) {
      team.name = newName;
      team.date= newDate;
      team.location= newLocation;

      alert(`Team ${team.name} has been updated!`);
    }
  }

 

  deleteTeam(team: Team) {
    const confirmDelete = confirm(`Are you sure you want to delete ${team.name}?`);
    if (confirmDelete) {
      const index = this.teams.indexOf(team);
      this.teams.splice(index, 1);
      alert(`Team ${team.name} has been deleted!`);
    }
  }

  insertPlayer() {
    this.router.navigate(['/players']);
   }

}
