export interface User {
  map: unknown;
  filter(arg0: (item: User) => boolean): unknown;
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
}
