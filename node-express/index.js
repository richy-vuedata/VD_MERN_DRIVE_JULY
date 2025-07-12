const express = require('express');
const app = express();
const port = 3001;


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get("/items", (req, res) => {
    const { page, limit, search } = req.query

    const items = [
        { id: 1, name: "Book of Dreams" },
        { id: 2, name: "Notebook Classic" },
        { id: 3, name: "Smart Lamp" },
        { id: 4, name: "Echo Speaker" },
        { id: 5, name: "Bluetooth Headset" },
        { id: 6, name: "Book of Secrets" },
        { id: 7, name: "Notebook Pro" },
        { id: 8, name: "Travel Backpack" },
        { id: 9, name: "Gaming Mouse" },
        { id: 10, name: "USB-C Charger" },
        { id: 11, name: "Wireless Keyboard" },
        { id: 12, name: "Smartwatch Series 5" },
        { id: 13, name: "HD Webcam" },
        { id: 14, name: "Portable SSD" },
        { id: 15, name: "Desk Organizer" },
        { id: 16, name: "Notebook Air" },
        { id: 17, name: "Wireless Earbuds" },
        { id: 18, name: "Book of Shadows" },
        { id: 19, name: "Laptop Stand" },
        { id: 20, name: "Ergonomic Chair" }
    ];
    let filteredData = items;

    if (search) {
        filteredData =  items.filter(item => item.name.toLowerCase().startsWith(search.toLowerCase()))
    }

    res.send({ data: filteredData.slice(page == 1 ? 0: page*limit, limit) })
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})