import {Intervenant} from './intervenant.model';
import {Medecin} from './medecin';
import {Organisme} from './organisme';
import {DonneesQualitatives} from './donneesQualitatives';

export interface Individu {

  prenom: string;
  nomFamille: string;
  genre: 'M' | 'Mme' | 'autre'; // pt à changer
  age: number;
  Nas: number; // il avait **** dans le doc du prof je sais pas pk
  actif: true | false;
  adresse: string;
  noTel: number;
  santeAllergie: string;
  travail: 'Trois-Rivières' | 'Shawinigan' | 'Louiseville'|'St-Tite';
  dateDebut: Date;
  dateFin: Date;
  reference: string; // ami, famille, etc.
  residence: 'appartement' | 'famille d\'accueil' | 'logement supervisé' | 'maison' | 'autre';
  niveauScolarite: 'aucun' | 'secondaire' | 'professionnel' | 'collégial' | 'universitaire';
  programmeEmployabilite: {dateDebut: string; dateFin: string};
  motifDepart: string; // choix de réponses ?
  heuresTravailJour: number;
  statut: 'clientèle' | 'employé régulier' | 'autre'; // pas sûr de comprendre
  suiviItinerance: {dateDebut: Date; dateFin: Date} | null;
  travauxCommunautaires: {dateDebut: Date; dateFin: Date} | null;
  tauxHoraire: number; // + transport ?
  transport: number; // Coût de transport ?
  intervenantResponsable: Intervenant;
  personneRessource: {prenom: string; nom: string; noTel: number; }; // devrait-on faire un model pour lui ?
  suiviPar: Intervenant | Medecin | Organisme;
  donnesQualitatives: DonneesQualitatives; // not sure
}
