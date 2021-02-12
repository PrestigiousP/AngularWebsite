export interface Travail{
  lieu: 'Trois-Rivières' | 'Shawinigan' | 'Louiseville' | 'St-Tite';
  dateDebut: Date;
  dateFin: Date;
  heuresTravailJour: number;
  tauxHoraire: number; // + transport ?
  travauxCommunautaires: {dateDebut: Date; dateFin: Date} | null;
  transport: number; // Coût de transport ?
}
