// Logic api//
// Izi Toast //
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from "./js/pixabay-api";
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader 
    
} from "./js/render-functions";


const form = document.querySelector(".form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const query = e.target.elements["search-text"].value.trim();

    if (!query) return;

    clearGallery();
    showLoader();

    getImagesByQuery(query)
        .then((data) => {
            const images = data.hits;

            if (!images.length) {
               iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again.",
                    position: "topRight"
                });
                return;
            }
            createGallery(images);
            form.reset();
        })
        .catch(() => {
            iziToast.error({
                message: "Something went wrong. Please try again later.",
                position: "topRight"
            });
        })
        .finally(() => {
            hideLoader();
        });

});
         

