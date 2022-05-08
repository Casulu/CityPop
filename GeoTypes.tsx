export interface CountryListResult {
    [index: number]: CityPopResult
}

export interface CityPopResult {
    name: String,
    population: Number
}