import { News, AssetItem } from '../models/News';
import { type } from 'os';
 
const generateExcerpt = (text: string, wordCount: number) => {
    return text.substr(0, text.lastIndexOf(' ', wordCount)) + '...';
};

const mapApiResponseToNews = (data) => {
    let newsList:News[] = new Array<News>();
    if(!data.response.results) return newsList;

    for(let i = 0; i < data.response.results.length; i++) {
        const responseItem = data.response.results[i];
        let newsItem:News = new News();

        newsItem.id = responseItem.id;
        newsItem.Title = responseItem.webTitle;
        newsItem.Section = responseItem.sectionName;
        newsItem.SectionId = responseItem.sectionId;  
        if(responseItem.fields) {
            newsItem.Thumbnail = responseItem.fields.thumbnail;
        }
        if(responseItem.blocks && responseItem.blocks.body) {
            let contentItem = responseItem.blocks.body[0];
            newsItem.Content = contentItem.bodyHtml;
            newsItem.Spot = generateExcerpt(contentItem.bodyTextSummary, 150);
            newsItem.CreatedDate = contentItem.createdDate;
            newsItem.ModifiedDate = contentItem.lastModifiedDate;

            if(contentItem.elements) {
                for (let index = 0; index < contentItem.elements.length; index++) {
                    const element = contentItem.elements[index];
                    if(element.assets) {
                        newsItem.AssetList = new Array<AssetItem>();
                        for (let j = 0; j < element.assets.length; j++) {
                            const asset = element.assets[j];

                            var assetItem = new AssetItem();
                            assetItem.file = asset.file;
                            assetItem.type = asset.type;
                            assetItem.width = asset.typeData.width;
                            assetItem.height = asset.typeData.height;
                            newsItem.AssetList.push(assetItem);
                            break;
                        }
                        break;
                    }
                } 
            }
        }
        newsList.push(newsItem);
    }
    return newsList;
};


export default {
    mapApiResponseToNews
};