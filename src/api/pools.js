import { Observable } from 'rxjs';
import {
    rootUrl,
    getJson,
    isProd,
    pollTime,
    pollFilter
} from './config';

const makeRequest = () => fetch(`${rootUrl}api/pools/1`).then(getJson);

const pool$ = Observable.from(makeRequest())
    .publishReplay(1)
    .refCount()
    .share();

const polling$ = Observable.interval(pollTime)
    .filter(pollFilter)
    .startWith('')
    .switchMap(makeRequest)
    .publishReplay(1)
    .refCount()
    .share();

const getPoolById = () => isProd() ? polling$ : pool$;

export {
    getPoolById
}
