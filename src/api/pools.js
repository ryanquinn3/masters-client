import { Observable } from 'rxjs';
import { http } from './authHttp';
import mockData from './fake-data';
import {
    rootUrl,
    isProd,
    pollTime,
    pollFilter
} from './config';

const makeRequest = () => http(`${rootUrl}api/pools/1`);

// const pool$ = Observable.from(makeRequest())
//     .publishReplay(1)
//     .refCount()
//     .share();

const polling$ = Observable.interval(pollTime)
    .filter(pollFilter)
    // .startWith('')
    // .switchMap(makeRequest)
    // .publishReplay(1)
    // .refCount()
    // .share();

const test$ = Observable.of(mockData.pools);

const getPoolById = () => isProd() ? polling$ : test$;


const submitEntry = (entry) => {
    return http(`${rootUrl}api/pools/1/entries`, {
        method: 'post',
        body: JSON.stringify({
            top_golfers: entry.topGolfers,
            field_golers: entry.fieldGolfers,
            num_birdies: entry.numBirdies
        })
    })
};

export {
    getPoolById,
    submitEntry
}
