export declare class LogicParser {
    file: string;
    constructor(file: string);
    load(): Promise<void>;
    getTracks(): never[];
    getTracksCount(): number;
    getResourceLocations(): string[];
    changeResourceLocations(location: string): void;
}
