export interface ILocation {
    lat: string
    long: string
    locality: string
    country: string
}

export interface ICircuit {
    circuitId: string
    url: string
    circuitName: string
    Location: ILocation
}

export interface IRace {
    season: string
    round: string
    url: string
    raceName: string
    date: string
    Circuit: ICircuit
}