import { getAllListingRoute } from "./getAllListings";
import { getListingRoute } from "./getListing";
import { addViewtoListingRoute } from './addViewToListing';
import { getUserListingsRoute } from './getUserListings';
import { createNewListingRoute } from './createNewListing';
import { updateListingRoute } from './updateListing';
import { deleteListingRoute } from './deleteListing';

export default [
    getAllListingRoute,
    getListingRoute,
    addViewtoListingRoute,
    getUserListingsRoute,
    createNewListingRoute,
    updateListingRoute,
    deleteListingRoute
];