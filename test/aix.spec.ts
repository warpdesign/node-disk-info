import {Utils} from '../src/utils/utils';
import {getDiskInfo} from '../src';

describe('node-disk-info-aix', () => {

    it('should not generate disks list info for unsupported so', (done) => {
        spyOn(Utils, 'detectPlatform').and.callFake(() => 'aix');

        getDiskInfo()
            .then(values => {
                done.fail(new Error('Promise should not be resolved'));
            })
            .catch(reason => {
                expect(reason.message).toEqual('Platform not supported: aix');
                done();
            });
    });

    it('should catch any error gracefully', (done) => {
        spyOn(Utils, 'detectPlatform').and.callFake(() => {
            throw new Error('An execution error');
        });

        getDiskInfo()
            .then(values => {
                done.fail(new Error('Promise should not be resolved'));
            })
            .catch(reason => {
                done();
            });
    });
});
