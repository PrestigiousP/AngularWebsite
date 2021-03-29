import {Adresse} from './adresse.model';

export interface Intervenant {
  id: string;
  prenom: string;
  nom: string;
  email: string;
  noTel: number;
  address: Adresse;
  organisme: string;
}
