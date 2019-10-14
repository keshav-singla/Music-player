import axios from 'axios';

const OAuthToken = 'BQC7PXjB7VVtO-VBVRNXtgJtHYnssSAMXObkQrebWvBNgi8o0rl1Oq2gIdy2X1jr9kEwcknGIDj72WvXdsc9y5dkArAB0gnPeioxaxjHbgbutSmHSGkolWQp3cDZYyX3Rj_L-Iugkt2RgJhJs9jdRGUgbk-2nHFc7BslrXq0RA';



const getdata = () => () => {
    let webApiUrl = `https://api.spotify.com/v1/search?q=shape%20of%20you&type=track`;
    return axios
        .get(webApiUrl, {headers: {"Authorization" : `Bearer ${OAuthToken}`}})
        .then(response => {
            return response.data.tracks.items;
        })
};

export default getdata;