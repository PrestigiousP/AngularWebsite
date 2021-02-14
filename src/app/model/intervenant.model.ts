import {Adresse} from './adresse.model';

export interface Intervenant {
  prenom: string;
  nom: string;
  email: string;
  noTel: number;
  address: Adresse;
  organisme: string;
}
