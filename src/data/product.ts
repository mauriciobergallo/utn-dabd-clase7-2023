export interface IProduct {
  id: number;
  name: string;
  description: string;
}

export const PRODUCTS_DATA: IProduct[] = [
  {
    id: 1,
    name: 'Cafe Cabrales',
    description: 'Café para tomar por la mañana',
  },
  {
    id: 2,
    name: 'Yerba Playadito',
    description: 'Yerba mate para hacerse unos Matienzos',
  },
  {
    id: 3,
    name: 'Bizcochos Don Satur',
    description: 'Bizcochos de Grasa para acompañar los mates',
  },
  {
    id: 4,
    name: 'Galletitas Surtido Bagley',
    description: 'Las que vienen con los anillitos',
  },
];
