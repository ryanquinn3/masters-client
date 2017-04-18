
const isProd = () => process.env.NODE_ENV === 'production';
const rootUrl = 'https://themasterspool.club/';

const pollTime = 60 * 1000;
const getJson = (i) => i.json();

const pollFilter = () => {
    const utcHours = new Date().getUTCHours();
    return utcHours > 13 || utcHours < 4;
}

export {
    pollFilter,
    pollTime,
    isProd,
    rootUrl,
    getJson
};
