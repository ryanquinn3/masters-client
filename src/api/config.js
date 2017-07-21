console.log(process.env.NODE_ENV);

export const isProd = () => process.env.NODE_ENV === 'production';
export const useProdServer = () => !!process.env.REACT_APP_USE_PROD;

export const rootUrl = isProd() ? '/' : 'https://pgapickem.club/';

export const pollTime = 60 * 1000;
export const getJson = (i) => i.json();

export const pollFilter = () => {
    const utcHours = new Date().getUTCHours();
    
    return utcHours > 5 && utcHours < 19;
}