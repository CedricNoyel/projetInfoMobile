export interface SessionsListDTO {
  [id: string]: Session;
}

export interface Session {
  id: number;
  title: string;
  titleMobile?: string;
  image?: string;
  type?: string;
  description?: string;
  track?: { title: string };
  language?: string;
  tags?: string[];
  complexity?: string;
  speakers?: number[];
}
