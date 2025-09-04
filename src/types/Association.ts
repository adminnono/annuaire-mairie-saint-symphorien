export interface Association {
  categorie: 'Culturelle' | 'Sportive' | 'Autre';
  nom: string;
  contact: string | null;
  telephone: string | null;
  email: string | null;
  site: string | null;
  image: string;
  reseaux: {
    facebook?: string;
    instagram?: string;
  };
}