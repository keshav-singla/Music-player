import axios from 'axios';

const OAuthToken = 'BQA4pVch4idWsdyw7TSnKMVP7ZNZr2R6SjzWVJcY2hnqdzqxmEHhrBQCOkJ1g85E_CrbLdl5VZhdqCBK2ufeUP4FvPFtM8tWUWmBUpnVzI9mViINeU1PRuBWMb-CxuCGg4orgueI6sRy39f0W6aIbjf5ssYoa27DB2KKl8SDSQ';



const getdata = () => () => {
    let webApiUrl = `https://api.spotify.com/v1/search?q=shape%20of%20you&type=track`;
    return axios
        .get(webApiUrl, {headers: {"Authorization" : `Bearer ${OAuthToken}`}})
        .then(response => {
            return response.data.tracks.items;
        })
};

export default getdata;