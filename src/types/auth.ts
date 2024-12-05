export interface AuthUser {
  id: string;
  email: string;
  name: string;
  photos: string[];
  verified: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  name: string;
  birthday: string;
  gender: string;
  university: string;
}