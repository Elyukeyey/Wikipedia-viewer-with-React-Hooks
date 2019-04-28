This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Wikipedia Viewer

Test the app [here](http://luka.isms.si/wikisearch)

You can:
* Search Wikipedia articles
* Get Titles and Excerpts from articles
* Get a thumbnail image for articles
* Visit the article page on Wikipedia

The search returns 20 items (Wikipedia API limits the number of returned excerpts to 20 and thumbnails to 50).

## Hooks
No Class components used (no useEffect also though).

## Axios jsonp adapter and Wikipedia API
Since the Wikipedia API returns a CORS error (probably because localhost is not https) axios jsonp adapter is used.

## Dependencies
* React
* React-DOM
* React Pose
* Axios
* Axios jsonp

Additionally, with the expansion of this app, the state management will be moved to redux.
