import fetch from 'node-fetch';

// Checks Json Object for needed keys and returns them in repackaged json if found
async function getSum(obj_url) {
    let response = await fetch(obj_url);
    let data = await response.json();
    let image_url = null;
    let wiki_url = null;
    let description = null;

    if (data.hasOwnProperty('originalimage')) {
        image_url = data.originalimage.source;
    }
    if (data.hasOwnProperty('content_urls')){
        wiki_url = data.content_urls.desktop.page;
    }
    if (data.hasOwnProperty('extract')){
        description = data.extract;
    }
    return {image_url : image_url, wiki_url : wiki_url, description : description}
};

export default getSum; 
