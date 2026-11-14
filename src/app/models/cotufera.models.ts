export type UserRole = 'normal' | 'critic';

export interface UserStats {
  reviewsCount: number;
  averageScoreGiven: number;
}

export interface UserProfile {
  _id: string;
  id?: string;
  name: string;
  email: string;
  role: UserRole;
  bio?: string;
  avatar?: string;
  specialty?: string;
  favoriteGenres?: string[];
  createdAt?: string;
  stats?: UserStats;
  reviews?: CommentItem[];
}

export interface CastMember {
  name: string;
  character: string;
  photoUrl: string;
}

export interface MovieStats {
  averageScore: number;
  criticScore: number;
  normalScore: number;
  criticCount: number;
  normalCount: number;
  totalReviews: number;
}

export interface MovieItem {
  _id: string;
  tmdbId: number;
  mediaType: 'movie' | 'tv';
  title: string;
  originalTitle?: string;
  tagline?: string;
  synopsis: string;
  releaseDate: string;
  coverUrl: string;
  backdropUrl?: string;
  gallery?: string[];
  genres: string[];
  actors: string[];
  castDetails?: CastMember[];
  director?: string;
  runtime?: number;
  seasons?: number;
  status?: string;
  originalLanguage?: string;
  certification?: string;
  studio?: string;
  trailerKey?: string;
  tmdbScore?: number;
  stats: MovieStats;
}

export interface CommentItem {
  _id: string;
  userId: UserProfile | any;
  movieId: MovieItem | any;
  tmdbId?: number;
  headline?: string;
  text: string;
  score: number;
  containsSpoilers?: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface MovieFilters {
  title?: string;
  category?: string;
  mediaType?: 'all' | 'movie' | 'tv';
  year?: string;
  dateFrom?: string;
  dateTo?: string;
  minScore?: number;
  scoreType?: 'average' | 'critic' | 'normal';
  sortBy?: 'date' | 'score' | 'criticScore' | 'normalScore' | 'title';
  sortOrder?: 'desc' | 'asc';
  external?: boolean;
}

export interface CatalogMeta {
  genres: string[];
  years: string[];
  totalCatalog: number;
  moviesCount: number;
  seriesCount: number;
}

export interface AvatarPreset {
  id: string;
  label: string;
  emoji: string;
  gradient: string;
  accent: string;
}

