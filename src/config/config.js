const ONLINE_API_URL = 'https://socketio-chat-server-app.herokuapp.com';
// const OFFLINE_API_URL = 'http://localhost:7000'; // local pc
// const OFFLINE_API_URL = 'http://192.168.0.103:7000'; // local wifi
const OFFLINE_API_URL = 'http://200.109.33.147:7000'; // share localhost with the world

const dev = true;

const SERVER_URL = dev ? OFFLINE_API_URL : ONLINE_API_URL; 

export {
    SERVER_URL
}