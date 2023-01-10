import Drive from './classes/drive';
import {Darwin} from './platforms/darwin';
import {Linux} from './platforms/linux';
import {Windows} from './platforms/windows';
import {Utils} from './utils/utils';

/**
 * Get disk info according current platform.
 *
 * @author Cristiam Mercado
 * @return {Promise<Drive[]>} Promise resolves array of disks and their info.
 */
export async function getDiskInfo(): Promise<Drive[]> {
    const platform = Utils.detectPlatform();

    switch (platform) {
        case 'aix': // IBM AIX platform
            throw(new Error(`Platform not supported: ${platform}`));

        case 'android': // Android platform
            throw(new Error(`Platform not supported: ${platform}`));

        case 'darwin': // Darwin platfrom(MacOS, IOS etc)
            return Darwin.run();

        case 'freebsd': // FreeBSD Platform
            return Darwin.run();

        case 'linux': // Linux Platform
            return Linux.run();

        case 'openbsd': // OpenBSD platform
            return Darwin.run();

        case 'sunos': // SunOS platform
            throw(new Error(`Platform not supported: ${platform}`));

        case 'win32': // windows platform
            return Windows.run();

        default: // unknown platform
            throw(new Error(`Platform not recognized: ${platform}`));
    }
}
