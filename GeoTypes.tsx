/**
 * Defines the format for all api requests to the geonames api
 */
export interface GeoResult {
    totalResultsCount: Number,
    geonames: CityPopResult[] | CountryLookupResult[] 
}

/**
 * Defines the relevant preperties from the result objects received from the API
 * when requesting city populations.
 */
export interface CityPopResult {
    name: String,
    population: number,
    geonameId: number
}

/**
 * Defines the relevant preperties from the result objects received from the API
 * when requesting coutnries country codes.
 */
export interface CountryLookupResult {
    name: String,
    countryCode: String
}