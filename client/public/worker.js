console.log("Worker started")

self.addEventListener("push", e => {
    const data = e.data.json();
    console.log("Push received...");
    self.registration.showNotification(data.title, {
        body: "Notified by worker.js...",
        icon: "https://qritlifesciences.com/wp-content/uploads/2018/03/QRIT-LOGO-TRANSPARENT-e1521634097318.png"
    });
});