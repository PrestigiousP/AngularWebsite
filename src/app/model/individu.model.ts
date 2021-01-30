export class individu{
  actif: boolean; // vrai = actif
  fName: string;
  lName: string;
  DOB: Date; // comme ca ???
  gender: 'male'|'female';
  email: string;
  numTel: string;
  address: string;
  NAS: string; // il avait **** dans le doc du prof je sais pas pk

  // note sur le patient (o	Problèmes de santé/allergies : notes qualitatives )
  notes: string;
  //lieu de travail
  travail: 'Trois-Rivières' | 'Shawinigan' | 'Louiseville'|'St-Tite';

  // début participation
  dateDL: Date;
  // fin participation
  dateF: Date;
// Référence (CIUSSS (SIV, SI, Autres), Organismes communautaires, Centre local d’emploi, SEMO, Personne elle-même, ami, famille, autres
  ref: string;


}
