export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  tags?: string[];
  history?: history[];
}
interface history {
  date: string;
  type: string;
  notes: string;
}
