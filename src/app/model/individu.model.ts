import {Adresse} from './adresse.model';
import {Travail} from './travail.model';
import {Intervenant} from './intervenant.model';
import {Medecin} from './medecin';
import {DonneesQualitatives} from './donneesQualitatives';
import {Contact} from './contact.model';

export interface Individu {
  id: number;
  prenom: string;
  nom: string;
  genre: 'M' | 'F' | 'autre'; // pt à changer
  age: number;
  dateNaissance: Date;
  departement: 'Recyclage' | 'SousTraitance' | 'AtelierArtistique' | 'TravauxCommunautaires' | '';
  nas: number; // il avait **** dans le doc du prof je sais pas pk
  actif: true | false;
  adresse: Adresse;
  noTel: number;
  santeAllergie: string;
  travail: Travail;
  reference: string; // ami, famille, etc.
  niveauScolarite: 'aucun' | 'secondaire' | 'professionnel' | 'collégial' | 'universitaire' | '';
  programmeEmployabilite: {dateDebut: Date; dateFin: Date};
  motifDepart: string; // choix de réponses ?
  statut: 'clientèle' | 'employé régulier' | 'autre' | ''; // pas sûr de comprendre
  suiviItinerance: {dateDebut: Date; dateFin: Date} | null;
  intervenantResponsable: Intervenant;
  personneRessource: Contact; // devrait-on faire un model pour lui ?
  suiviPar: Intervenant | Medecin | 'Autres';
  donneesQualitatives: DonneesQualitatives; // not sure
}
