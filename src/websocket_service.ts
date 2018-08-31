import {Session} from "./session";
import {Notification} from "./models/notification";
import {client as WebSocketClient, connection} from 'websocket';

export class WebsocketService {
    private session: Session;
    private client: WebSocketClient;
    private connection: connection;
    private listeners: any[] = [];

    constructor(session: Session) {
        this.session = session;
    }

    connect(): WebsocketService {
        this.client = new WebSocketClient();

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
                    console.log("Received: '" + message.utf8Data + "'");
                }
                let j = JSON.parse(message.utf8Data);
                if (j) {
                    let notif = new Notification(j, this.session.clientService.configuration);
                    for (let l of this.listeners) {
                        l(notif);
                    }
                }
            });
        });
        console.info("connect to websocket", this.session.clientService.configuration.websocketEndpointUrl + "/notification");
        this.client.connect(this.session.clientService.configuration.websocketEndpointUrl + "/notification", null, null, {
            "Authorization": this.session.clientService.configuration.token
        });
        return this;
    }

    close() {
        if (this.connection) {
            this.connection.close()
        }
    }

    private send(message: string) {
        if (this.connection.connected) {
            this.connection.sendUTF(message);
        }
    }

    onMessage(callback) {
        this.listeners.push(callback);
    }


}