// Model definition for a FeedItem using a constructor function
function FeedItem(title, body, linkUrl, imageUrl) {
    this.title = title || '';
    this.body = body || '';
    this.linkUrl = linkUrl || '';
    this.imageUrl = imageUrl || '';
}

// Factory function to create a new FeedItem
function newFeedItem(title, body, linkUrl, imageUrl) {
    return new FeedItem(title, body, linkUrl, imageUrl);
}

// Export both constructor and factory function
module.exports = {
    FeedItem,
    newFeedItem
};