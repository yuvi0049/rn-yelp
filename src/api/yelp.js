import axios from 'axios';

const API_KEY = "dsfedfvdsvdfvaefbv_Bvdfbdfavafeargt5a$#%FVSDVFDBAG43TBGSBFB";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${API_KEY}`
    }
});
