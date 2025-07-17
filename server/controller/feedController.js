const { FeedItem } = require('../model/feedItem');  // Destructure the constructor

// Sample initial data
let allFeedItems = [
    new FeedItem('dog', 'cat', 'mouse', 'donkey'),   // Only 4 args per constructor
    new FeedItem('pizza', 'chicken', 'burger', 'me'),
    new FeedItem('blue', 'red', 'yellow', 'green')
];

// GET all
exports.getAllFeedItem = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(allFeedItems);
};

// POST new item
exports.saveFeedItemHandler = (req, res) => {
    const newItem = new FeedItem(req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl);
    allFeedItems.push(newItem);
    res.status(201).json(newItem);
};

// GET by ID
exports.getFeedItem = (req, res) => {
    const id = parseInt(req.params.feedItemId);
    if (isNaN(id) || id < 0 || id >= allFeedItems.length) {
        return res.status(404).json({ error: 'Feed item not found' });
    }
    res.json(allFeedItems[id]);
};

// DELETE by ID
exports.deleteFeedItem = (req, res) => {
    const id = parseInt(req.params.feedItemId);
    if (isNaN(id) || id < 0 || id >= allFeedItems.length) {
        return res.status(404).json({ error: 'Feed item not found' });
    }
    const deleted = allFeedItems.splice(id, 1)[0];
    res.json({ message: 'Feed item deleted', deleted });
};

// PUT/PATCH update by ID
exports.updateFeedItem = (req, res) => {
    const id = parseInt(req.params.feedItemId);
    if (isNaN(id) || id < 0 || id >= allFeedItems.length) {
        return res.status(404).json({ error: 'Feed item not found' });
    }
    const item = allFeedItems[id];
    if (req.body.title) item.title = req.body.title;
    if (req.body.body) item.body = req.body.body;
    if (req.body.linkUrl) item.linkUrl = req.body.linkUrl;
    if (req.body.imageUrl) item.imageUrl = req.body.imageUrl;
    res.json(item);
};