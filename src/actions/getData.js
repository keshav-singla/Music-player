import axios from 'axios';

const OAuthToken = 'BQDDQQbZmMpuAobfBhBmUAIMrP2hk1X8XlX3484T2svDAc4hrWp7SkNcxBhU8EUhp6I_9x4WmzMoQ-C-3-yKJHVGDqKyJ2CihAPBnW9TFPzHavVE63A0xda1CbHIYrLdu0ExyzQrUToL9O1SKTBvJzJ--FHouobKRNJqc34Y9Q';



const getdata = () => () => {
    let webApiUrl = `https://api.spotify.com/v1/search?q=ed%20sheeran&type=artist`;
    return axios
        .get(webApiUrl, {headers: {"Authorization" : `Bearer ${OAuthToken}`}})
        .then(response => {
            return response.data.artists.items;
        })
};

export default getdata;