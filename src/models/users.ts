export interface RegisterStructure extends LoginStructure {
  id?: string;
  firstName: string;
  lastName: string;
  telephone: string;
}
export interface LoginStructure {
  email: string;
  passwd: string;
}
export type ServerResponse = {
  results: [];
};
export type TokenResponse = {
  token: string;
};

// export class User implements RegisterStructure {
//   constructor(
//     public id: string,
//     public email: string,
//     public passwd: string,
//     public firstName: string,
//     public lastName: string,
//     public telephone: string
//   ) {}
// }
