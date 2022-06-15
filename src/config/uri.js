let prefix = 'https://api.iynn.cn/film/api/v1/';
export default {
    getCity: prefix + "getCitiesInfo?cors=T&",
    getNowPlaying: prefix + "getNowPlayingFilmList?cors=T&",
    getComingSoon: prefix + "getComingSoonFilmList?cors=T&",
    getDetail: prefix + "getFilmInfo?cors=T&"
}