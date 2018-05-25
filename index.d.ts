declare class Tag{
    key: string;
    value: string;
}

declare abstract class MediaObject {
    constructor();

    static addTag(key: string, value: string, callback?: (error: Error) => void): Promise<void>;

    static getTag(key: string, callback?: (error: Error, result: string) => void): Promise<string>;

    static getTags(callback?: (error: Error, result: Tag[]) => void): Promise<Tag[]>;
}