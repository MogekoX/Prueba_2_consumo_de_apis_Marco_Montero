export type User = {
  username: string;
  password: string;
  recordar: boolean
}

export type respuestaUser = {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: 'male' | 'female';
  token: string
}
