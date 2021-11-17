import { Endereco } from "./endereco";

export interface Registro {
  id: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  brithdate: string;
  phone: string;
  rg: string;
  cpf: string;
  endereco: Endereco;
}
