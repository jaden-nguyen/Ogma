import express from 'express';

const path = require('path');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/index.html')));

// app.get('/', (req, res) => {
//   res.setHeader('Content-Type', 'text/html').sendFile(path.join(__dirname, ''))
// })

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));