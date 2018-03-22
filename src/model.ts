export class Feature {
    constructor(public name: string, public options: Array<string>){}
}

export class Datapoint {
    constructor(public name: string, public features: Array<Feature>){}
}

export const ADDED_DATA_POINT: string = "addedDataPoint";
export const DATAPOINTS_KEY = "datapoints";