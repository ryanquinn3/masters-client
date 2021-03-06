import { Observable } from 'rxjs';
import { http } from './authHttp';
import mockData from './fake-data';
import {
    rootUrl,
    getJson,
    isProd,
    pollTime,
    pollFilter,
    useProdServer,
} from './config';

const makeRequest = () => http(`${rootUrl}api/golfers`);

// const masters$ = Observable.from(makeRequest())
//     .publishReplay(1)
//     .refCount()
//     .share();


const polling$ = Observable.interval(pollTime)
    .filter(pollFilter)
    .startWith('')
    .switchMap(makeRequest)
    .publishReplay(1)
    .refCount()
    .share();

const test$ = Observable.of(mockData.golfers);

const getMastersLeaderboard = () => (isProd() || useProdServer()) ? polling$ : test$;


export {
    getMastersLeaderboard
};
