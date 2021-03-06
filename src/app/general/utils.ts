import { News, AssetItem, Section } from '../models/Objects'; 
import { AppSettings } from './settings';
 
const generateExcerpt = (text: string, wordCount: number) => {
    return text.substr(0, text.lastIndexOf(' ', wordCount)) + '...';
};

const mapApiResponseToNewsItem = (data) => {
    const responseItem = data;
    let newsItem:News = new News();

    newsItem.id = responseItem.id;
    newsItem.Url = '/' + responseItem.id;
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
    return newsItem;
};


const mapApiResponseToNewsSingle = (data) => {
    const responseItem = data.response.content;
    let newsItem:News = mapApiResponseToNewsItem(responseItem);
    return newsItem;
};

const mapApiResponseToNewsForList = (data) => {
    let newsList:News[] = new Array<News>();
    if(!data.response.results) return newsList;

    for(let i = 0; i < data.response.results.length; i++) {
        const responseItem = data.response.results[i];
        let newsItem:News =  mapApiResponseToNewsItem(responseItem);
        newsList.push(newsItem);
    }
    return newsList; 
};

// Sayfa içerisinde geçerli olmak üzere kategorilere kalıcı olarak class ataması yapar
const sectionClasses = [];
const getSectionClassName = (sectionId:string) => {
    let className = ""; 
    let filteredSection = sectionClasses.filter((el, ix) => {
        return el.id == sectionId;
    })[0]; 

    if(filteredSection) {
        className = filteredSection.className;
        return className;
    } 

    let classArray = ["cat-1", "cat-2", "cat-3", "cat-4", "cat-5", "cat-6"]; 
    switch(sectionId) { 
        case 'world':
            className = classArray[0];
            break;
        case 'science':
            className = classArray[1];
            break;
        case 'technology':
            className = classArray[2];
            break;
        case 'football':
            className = classArray[3];
            break;
        case 'business':
            className = classArray[4];
            break;
        case 'games':
            className = classArray[5];
            break;
        default:
            let random = Math.floor(Math.random() * 5);
            className = classArray[random];
            break;
    } 
    sectionClasses.push({ id: sectionId, className: className }); 
    return className;
};

const getCategories = () => {
    let categories: Section[] = [
        { id: 'world', Url: '/world', Name: 'World'  },
        { id: 'science', Url: '/science', Name: 'Science'  },
        { id: 'technology', Url: '/technology', Name: 'Technology'  },
        { id: 'football', Url: '/football', Name: 'Football'  },
        { id: 'business', Url: '/business', Name: 'Business'  },
        { id: 'games', Url: '/games', Name: 'Games'  },
        { id: 'environment', Url: '/environment', Name: 'Environment'  },
        { id: 'culture', Url: '/culture', Name: 'Culture'  }
      ];
    return categories;
}; 

const validateEmail = email => {
    var reg = new RegExp(/\S+@\S+\.\S+/);
    return reg.test(email);
};



export default {
    mapApiResponseToNewsForList,
    mapApiResponseToNewsSingle,
    getSectionClassName,
    getCategories,
    validateEmail
};