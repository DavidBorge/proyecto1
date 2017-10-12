var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        navigator.notification.alert("Hola Mundo", null, "Alerta", "OK");
    }
};

app.initialize();