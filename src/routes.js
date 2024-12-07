import { createBooksHandler, getAllBooksHandler, getByIdBooksHandler } from './handler.js';

// Define your routes here using the handlers
const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: createBooksHandler
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler
    },
    {
        method: 'GET',
        path: '/books/{idBook}',
        handler: getByIdBooksHandler
    }
];

export default routes;
