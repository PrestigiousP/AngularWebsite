import {Adresse} from './adresse.model';

export interface Intervenant {
  prenom: string;
  nom: string;
  email: string;
  numTel: number;
  address: Adresse;
  organisme: string;
}
