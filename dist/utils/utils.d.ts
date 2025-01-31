/// <reference types="node" />
/**
 * Class with utilitary methods.
 */
export declare class Utils {
    /**
     * Detects current platform.
     *
     * @return {string} Platform: win32, linux, darwin.
     */
    static detectPlatform(): string;
    /**
     * Get chcp value (only for Win32 platform).
     *
     * @return {Promise<string>} Platform: win32.
     */
    static chcp(): Promise<string>;
    /**
     * Executes a command in SO console.
     *
     * @param {Promise<Buffer>} command: Command to execute.
     */
    static execute(command: string): Promise<Buffer>;
}
