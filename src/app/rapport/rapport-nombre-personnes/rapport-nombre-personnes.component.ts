import {Component, OnInit} from '@angular/core';
import {IndividuService} from '../../services/individu.service';
import {Individu} from '../../model/individu.model';

@Component({
  selector: 'app-rapport-nombre-personnes',
  templateUrl: './rapport-nombre-personnes.component.html',
  styleUrls: ['../rapport.component.css']
})
export class RapportNombrePersonnesComponent implements OnInit {
  listeIndividusDepartement: Individu[];
  listeNbPersonnes: number[];
  listeDepartements = ['Recyclage', 'SousTraitance', 'AtelierArtistique', 'TravauxCommunautaires'];


  constructor(private indS: IndividuService) {
  }

  ngOnInit(): void {
    this.listeNbPersonnes = [0, 0, 0, 0];
    // get une liste de nombres d'heures par semaine selon le id de l'individu
    this.indS.listeIndividu.subscribe( data => {
      this.listeIndividusDepartement = data;
      this.listeIndividusDepartement.forEach(ind => {
        if (ind.departement === 'Recyclage') {
          this.listeNbPersonnes[0] += 1;
        } else if (ind.departement === 'SousTraitance') {
          this.listeNbPersonnes[1] += 1;
        } else if (ind.departement === 'AtelierArtistique') {
          this.listeNbPersonnes[2] += 1;
        } else if (ind.departement === 'TravauxCommunautaires') {
          this.listeNbPersonnes[3] += 1;
        }
      });
    });

  }
}
