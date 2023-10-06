export interface IDriver {
    driverId: string
    url: string
    givenName: string
    familyName: string
    dateOfBirth: string
    nationality: string
}

export interface IDriversCollectionSuccess {
    collection: IDriver[] | []
    offset: number
	total: number
	pageCount: number
}