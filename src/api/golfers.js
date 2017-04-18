import { Observable } from 'rxjs';
import {
    rootUrl,
    getJson,
    isProd,
    pollTime,
    pollFilter
} from './config';

const makeRequest = () => fetch(`${rootUrl}api/golfers`).then(getJson)

const masters$ = Observable.from(makeRequest())
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

const getMastersLeaderboard = () => isProd() ? polling$ : masters$;


export {
    getMastersLeaderboard
};
