class PubSub {
    constructor() {
        this.subscribers = {};
    }

    subscribe(event, callback) {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }
        this.subscribers[event].push(callback);
    }

    unsubscribe(event, callback) {
        if (this.subscribers[event]) {
            this.subscribers[event] = this.subscribers[event].filter(subCallback => subCallback !== callback);
        }
    }

    publish(event, data) {
        if(this.subscribers[event]) {
            this.subscribers[event].forEach(callback => callback(data));
        }
    }
}