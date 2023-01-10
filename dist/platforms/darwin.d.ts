import Drive from '../classes/drive';
/**
 * Class with OSX specific logic to get disk info.
 */
export declare class Darwin {
    /**
     * Execute specific OSX command to get disk info.
     *
     * @return {Promise<Drive[]>} List of drives and their info.
     */
    static run(): Promise<Drive[]>;
}
