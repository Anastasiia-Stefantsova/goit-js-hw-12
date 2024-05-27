import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43903713-409f48a94c7346dbfb07fdc03';

const fetchPhotos = async (searchImage, page) => {
 
    const response = await axios (BASE_URL, {
      params: {
        key: API_KEY,
        q: searchImage,
        image_type: 'photo',
        orientation: 'horizontal', 
        safesearch: 'true',
        page: page,
        per_page: 15,
      },
    });
    return response.data;
};

export default fetchPhotos;


