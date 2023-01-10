import * as os from 'os';
import { promisify } from 'util';
import { exec } from 'child_process';

const execAsync = promisify(exec)
/**
 * Class with utilitary methods.
 */
export class Utils {

    /**
     * Detects current platform.
     *
     * @return {string} Platform: win32, linux, darwin.
     */
    public static detectPlatform(): string {
        return os.platform().toLowerCase();
    }

    /**
     * Get chcp value (only for Win32 platform).
     *
     * @return {Promise<string>} Platform: win32.
     */
     public static async chcp(): Promise<string> {
        const { stdout } = await execAsync('chcp', {windowsHide: true})
        return stdout.toString().split(':')[1].trim();
    }

    /**
     * Executes a command in SO console.
     *
     * @param {Promise<Buffer>} command: Command to execute.
     */
    public static async execute(command: string): Promise<Buffer> {
        const { stdout } = await execAsync(command,{windowsHide: true, encoding: 'buffer'});
        return stdout
    }
}
