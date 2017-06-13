import { Observable } from 'rxjs';
import { authHttp } from './authHttp';
import mockData from './fake-data';
import {
    rootUrl,
    isProd,
    pollTime,
    pollFilter
} from './config';

const makeRequest = () => authHttp(`${rootUrl}api/pools/1`);

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

export {
    getPoolById
}
