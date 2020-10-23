export interface SpeakersListDTO {
  [id: string]: Speaker;
}

export interface Speaker {
  id: number;
  name: string;
  company: string;
  companyLogo?: string;
  country?: string;
  photoUrl?: string;
}
