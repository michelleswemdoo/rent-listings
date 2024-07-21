type Description = {
  sub_type?: string;
  type?: string;
  beds?: number;
  baths?: number;
  lot_sqft?: number;
  sqft?: number;
};

type Branding = {
  name?: string;
  __typename?: string;
  photo?: string;
  phone?: string;
  link?: string;
};

type Address = {
  __typename?: string;
  city?: string;
  line?: string;
  street_name?: string;
  street_number?: string;
  street_suffix?: string;
  country?: string;
  postal_code?: string;
  state_code?: string;
  state?: string;
};

type Location = {
  address: Address;
};

type Primaryphoto = {
  __typename?: string;
  href: string;
};

export type Listings = {
  primary_photo: Primaryphoto;
  branding: Array<Branding>;
  location: Location;
  description: Description;
  list_price: number;
  property_id: string;
  listing_id?: string;
};
export type Lists = {
  count: number;
  total: number;
  results: Array<Listings>;
  __typename: string;
};

export type Photo = {
  __typename: string;
  href: string;
  type: string;
};

type ConsumerAdvertiser = {
  __typename: string;
  advertiser_id: string;
  agent_id: string;
  name: string;
  phone: string;
  type: string;
  href: string;
};

export type Property = {
  description: Description;
  list_price: number;
  location: Location;
  photos: Array<Photo>;
  consumer_advertisers: Array<ConsumerAdvertiser>;
};
