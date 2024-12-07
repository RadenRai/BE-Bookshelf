import Hapi from '@hapi/hapi';  // Importing the Hapi framework
import routes from './routes.js';  // Importing routes

const init = async () => {
    const server = Hapi.server({
        port: 3000, // Port for the server
        host: 'localhost' // Host the server will listen to
    });

    server.route(routes);  // Registering the routes
    
    await server.start();
    console.log('Server berjalan pada port: %s', server.info.uri);  // Logging the server URI to console
};

init();  // Starting the server





                                                                                                                                                                                                                                                                                                                                                                