import { News } from '../models/News';

const generateExcerpt = (text:string, wordCount:number) => {
    return text.substr(0, text.lastIndexOf(' ', wordCount)) + '...';
};

const mapApiResponseToNews = (data) => {
    let newsList:News[] = new Array<News>();
    if(!data.response.results) return newsList;

    for(let i = 0; i < data.response.results.length; i++) {
        const responseItem = data.response.results[i];
        let newsItem:News = new News();

        newsItem.id = responseItem.id;
        newsItem.Section = responseItem.sectionName;
        newsItem.SectionId = responseItem.SectionId;
        if(responseItem.blocks && responseItem.blocks.body) {
            let contentItem = responseItem.blocks.body[0];
            newsItem.Content = contentItem.bodyHtml;
            //newsItem.Spot = this.generateExcerpt(contentItem.bodyTextSummary);
            newsItem.CreatedDate = contentItem.createdDate;
            newsItem.ModifiedDate = contentItem.lastModifiedDate;

            if(contentItem.elements) {
                for (let index = 0; index < contentItem.elements.length; index++) {
                    const element = contentItem.elements[index];
                    if(element.assets) {
                        for (let j = 0; j < element.assets.length; j++) {
                            const asset = element.assets[j];
                            newsItem.Image = asset;
                            break;
                        }
                        break;
                    }
                } 
            }
        }
        newsList.push(newsItem);
    } 
};


export default {
    mapApiResponseToNews
};