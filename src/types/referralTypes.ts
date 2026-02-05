export interface Referral {
  id?: number;
  given_name: string;
  surname: string;
  email: string;
  phone: string | null;
  home?: string | null;
  street?: string | null;
  suburb?: string | null;
  state?: string | null;
  postcode?: string | null;
  country?: string | null;
  created_at?: Date;
}
