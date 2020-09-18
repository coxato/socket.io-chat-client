const ONLINE_API_URL = 'https://socketio-chat-server-app.herokuapp.com';
// const OFFLINE_API_URL = 'http://localhost:5000';
const OFFLINE_API_URL = 'http://200.109.33.147:5000';

const dev = true;

const SERVER_URL = dev ? OFFLINE_API_URL : ONLINE_API_URL; 

export {
    SERVER_URL
}