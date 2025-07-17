const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const feedController = require('./controller/feedController');

const app = express();
const PORT = 1337;

// Serve static files
app.use(express.static(path.join(__dirname, 'client/public')));

// Parse JSON bodies
app.use(bodyParser.json());

// Serve HTML views
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'client/views') });
});

app.get('/feed', (req, res) => {
    res.sendFile('feed.html', { root: path.join(__dirname, 'client/views') });
});

// API Routes for FeedItem
app.route('/api/FeedItem')
    .get(feedController.getAllFeedItem)
    .post(feedController.saveFeedItemHandler);

app.route('/api/FeedItem/:ItemId')
    .get(feedController.getFeedItem)
    .delete(feedController.deleteFeedItem)
    .patch(feedController.updateFeedItem);

// Start the server
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));