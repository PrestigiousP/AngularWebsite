export interface Adresse{
  numCivic: number;
  appartement: number;
  rue: string;
  codePostal: string;
  ville: string;
  typeResidence: 'appartement' | 'famille d\'accueil' | 'logement supervisé' | 'maison' | 'autre';
}
