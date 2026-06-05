// Logic api//
// Izi Toast //
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from "./js/pixabay-api";
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton,
} from "./js/render-functions";


const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more");

let currentQuery = "";
let currentPage = 1;

const PER_PAGE = 15;

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const query = e.target.elements["search-text"].value.trim();

    if (!query) return;

    currentQuery = query;
    currentPage = 1;

    clearGallery();
    hideLoadMoreButton();
    showLoader();

    try {
        const data = await getImagesByQuery(
            currentQuery,
            currentPage
        );
        if (!data.hits.length) {
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again.",
            });
            return;
        }
        
        createGallery(data.hits);
        form.reset();
        
        const totalPages = Math.ceil(data.totalHits / PER_PAGE);

        if (currentPage < totalPages) {
            showLoadMoreButton();
        }
        else {
            hideLoadMoreButton();
        }

    } catch (error) {
        iziToast.error({
            message: "Something went wrong. Please try again later.",
        });
    } finally {
        hideLoader();
    }
});
   
  
loadMoreBtn.addEventListener("click", async () => {
    loadMoreBtn.disabled = true;
    currentPage += 1;
    
    showLoader();

    try {
        const data = await getImagesByQuery(currentQuery,currentPage);

        createGallery(data.hits);
        
        const totalPages = Math.ceil(data.totalHits / PER_PAGE);

        if (currentPage >= totalPages) {
            hideLoadMoreButton();
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
            });
        } else {
            showLoadMoreButton();
        }

        const card = document.querySelector(".gallery-item");
        if (card) {
            const cardHeight = card.getBoundingClientRect().height;

window.scrollBy({
  top: cardHeight * 2,
  behavior: "smooth",
});
}
} catch (error) {
    iziToast.error({
      message: "Something went wrong. Please try again later.",
    });
  } finally {
        hideLoader();
        loadMoreBtn.disabled = false;
  }
});