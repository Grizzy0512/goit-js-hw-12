import axios from "axios";

const API_KEY = "56162329-704add285f418fdbebe47467d";
const BASE_URL = "https://pixabay.com/api/";

export function getImagesByQuery(query) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });

    return axios.get(`${BASE_URL}?${params}`).then(res => res.data);
}
