// Generate a random ID string of custom length
export const genID = (len = 9) => `_${Math.random().toString(36).substr(2, len)}`;

// Fetch URL:
export const API_URL = `https://www.wikipedia.org/w/api.php?format=json&action=query&prop=pageimages|extracts&pilimit=max&&exchars=280&exintro&explaintext&exlimit=max&generator=search&gsrlimit=20&gsrsearch=`;
// JSONP callback:
export const CB = `&callback=JSON_DATA`;

// RETURN ADDRESS
export const RETURN_ADDR = `https://en.wikipedia.org/?curid=`;