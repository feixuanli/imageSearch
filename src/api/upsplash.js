import axios from 'axios';

//set up pre-configured instance of axios client 

export default axios.create({
    headers: {
        Authorization: 'Client-ID 8b1f90f61ff3fe4ad7ec22623862c642bd3e0105e881e6bb91ac829bf27cfbb3',
    },
    baseURL: 'https://api.unsplash.com',
});
