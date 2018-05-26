import { EventEmitter } from 'events';

declare class Tag{
    key: string;
    value: string;
}

declare class GstreamerDotDetails{
    
}

/**
 * A pipeline is a container for a collection of MediaElements and :rom:cls:`MediaMixers`. It offers the methods needed to control the creation and connection of elements inside a certain pipeline.
 * 
 * @class MediaPipeline
 */
declare class MediaPipeline extends MediaObject{
    constructor();

    /**
     * Returns a string in dot (graphviz) format that represents the gstreamer elements inside the pipeline
     * 
     * @static
     * @param {GstreamerDotDetails} [details] Details of graph
     * @param {(error: Error, result: string) => void} [callback] 
     * @returns {Promise<string>} The dot graph
     * @memberof MediaPipeline
     */
    static getGstreamerDot(details?: GstreamerDotDetails, callback?: (error: Error, result: string) => void): Promise<string>;

    /**
     * If statistics about pipeline latency are enabled for all mediaElements
     * 
     * @param {(error: Error, result: boolean) => void} [callback] 
     * @returns {Promise<boolean>} 
     * @memberof MediaPipeline
     */
    public getLatencyStats(callback?: (error: Error, result: boolean) => void): Promise<boolean>;

    /**
     * If statistics about pipeline latency are enabled for all mediaElements
     * 
     * @param {boolean} latencyStats 
     * @param {(error: Error) => void} callback 
     * @returns {Promise<void>} 
     * @memberof MediaPipeline
     */
    public setLatencyStats(latencyStats: boolean, callback: (error: Error) => void): Promise<void>;
}

/**
 * Base interface used to manage capabilities common to all Kurento elements. This includes both: MediaElement and MediaPipeline
 * 
 * @abstract
 * @class MediaObject
 */
declare abstract class MediaObject extends EventEmitter {
    readonly id: string;
    name: string;
    tags: any;

    constructor();

    /**
     * Adds a new tag to this MediaObject. If the tag is already present, it changes the value.
     * 
     * @static
     * @param {string} key Tag name
     * @param {string} value Value associated to this tag
     * @param {(error: Error) => void} [callback] 
     * @returns {Promise<void>} 
     * @memberof MediaObject
     */
    static addTag(key: string, value: string, callback?: (error: Error) => void): Promise<void>;

    static getTag(key: string, callback?: (error: Error, result: string) => void): Promise<string>;

    static getTags(callback?: (error: Error, result: Tag[]) => void): Promise<Tag[]>;

    static removeTag(key: string, callback?: (error: Error) => void): Promise<void>;

    public getChildren(callback?: (error: Error, result: MediaObject[]) => void): Promise<MediaObject[]>;

    public getCreationTime(callback?: (error: Error, result: number) => void): Promise<number>;

    /**
     * `MediaPipeline` to which this MediaObject belongs. It returns itself when invoked for a pipeline object.
     * 
     * @param {(error: Error, result: MediaPipeline) => void} [callback] 
     * @returns {Promise<MediaPipeline>} 
     * @memberof MediaObject
     */
    public getMediaPipeline(callback?: (error: Error, result: MediaPipeline) => void): Promise<MediaPipeline>;

    /**
     * this MediaObject's name. This is just a comodity to simplify developers' life debugging, it is not used internally for indexing nor idenfiying the objects. By default, it's the object's ID.
     * 
     * @param {(error: Error, result: string) => void} [callback] 
     * @returns {Promise<string>} 
     * @memberof MediaObject
     */
    public getName(callback?: (error: Error, result: string) => void): Promise<string>;

    /**
     * parent of this MediaObject. The parent of a Hub or a
     * 
     * @param {(error: Error, result: MediaObject) => void} [callback] 
     * @returns {Promise<MediaObject>} 
     * @memberof MediaObject
     */
    public getParent(callback?: (error: Error, result: MediaObject) => void): Promise<MediaObject>

    /**
     * 
     * 
     * @param {(error: Error, result: boolean) => void} [callback] 
     * @returns {Promise<boolean>} 
     * @memberof MediaObject
     */
    public getSendTagsInEvents(callback?: (error: Error, result: boolean) => void): Promise<boolean>;

    /**
     * this MediaObject's name. This is just a comodity to simplify developers' life debugging, it is not used internally for indexing nor idenfiying the objects. By default, it's the object's ID
     * 
     * @param {string} name 
     * @param {(error: Error) => void} [callback] 
     * @returns {Promise<void>} 
     * @memberof MediaObject
     */
    public setName(name: string, callback?: (error: Error) => void): Promise<void>;

    /**
     * flag activating or deactivating sending the element's tags in fired events.
     * 
     * @param {any} sendTagsInEvents 
     * @param {(error: Error) => void} [callback] 
     * @returns {Promise<void>} 
     * @memberof MediaObject
     */
    public setSendTagsInEvents(sendTagsInEvents: boolean, callback?: (error: Error) => void): Promise<void>;
}