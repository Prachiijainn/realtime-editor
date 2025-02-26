import { io } from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://localhost:3333'; // Change this if your backend runs on a different port

export const initSocket = async () =>{
    return io(SOCKET_SERVER_URL, {
        transports: ['websocket'],  // Use WebSocket transport
        reconnectionAttempts: 5,    // Retry 5 times
        timeout: 10000,             // 10 seconds timeout
    });
};
