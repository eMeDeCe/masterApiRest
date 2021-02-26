export interface Character {
  id: string;
  type: string;
  name: string;
  created: number;
  modified: number;
  address1: string;
  airportCode: string;
  amenityMask: number;
  city: string;
  confidenceRating: number;
  countryCode: string;
  deepLink: string;
  highRate: number;
  characterId: number;
  characterInDestination: boolean;
  characterRating: number;
  location: {
    latitude: number;
    longitude: number;
  };
  locationDescription: string;
  lowRate: number;
  metadata: {
    path: string;
  };
  postalCode: number;
  propertyCategory: number;
  proximityDistance: number;
  proximityUnit: string;
  rateCurrencyCode: string;
  shortDescription: string;
  stateProvinceCode: string;
  thumbNailUrl: string;
  tripAdvisorRating: number;
  tripAdvisorRatingUrl: string;
}

export interface CharacterEdit {
  id: string;
  name: string;
  address1: string;
  city: string;
  shortDescription: string;
  characterRating: number;
}
