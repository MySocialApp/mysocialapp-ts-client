"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notification_1 = require("./models/notification");
const websocket_1 = require("websocket");
class WebsocketService {
    constructor(session) {
        this.listeners = [];
        this.session = session;
    }
    connect() {
        this.client = new websocket_1.client();
        this.client.on('connectFailed', (error) => {
            console.log('Connect Error: ' + error.toString());
        });
        this.client.on('connect', (connection) => {
            this.connection = connection;
            console.log('WebSocket Client Connected');
            this.connection.on('error', (error) => {
                console.log("Connection Error: " + error.toString());
            });
            this.connection.on('close', () => {
                console.log('echo-protocol Connection Closed');
            });
            this.connection.on('message', (message) => {
                if (message.type === 'utf8') {
                }
                let j = JSON.parse(message.utf8Data);
                if (j) {
                    let notif = new notification_1.Notification(j, this.session.clientService.configuration);
                    for (let l of this.listeners) {
                        l(notif);
                    }
                }
            });
        });
        this.client.connect(this.session.clientService.configuration.websocketEndpointUrl + "/notification", null, null, {
            "Authorization": this.session.clientService.configuration.token
        });
        return this;
    }
    close() {
        if (this.connection) {
            this.connection.close();
        }
    }
    send(message) {
        if (this.connection.connected) {
            this.connection.sendUTF(message);
        }
    }
    onMessage(callback) {
        this.listeners.push(callback);
    }
}
exports.WebsocketService = WebsocketService;
