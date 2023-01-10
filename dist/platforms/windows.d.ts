import Drive from '../classes/drive';
/**
 * Class with Windows specific logic to get disk info.
 */
export declare class Windows {
    /**
     * Execute specific Windows command to get disk info.
     *
     * @return {Promise<Drive[]>} List of drives and their info.
     */
    static run(): Promise<Drive[]>;
}
