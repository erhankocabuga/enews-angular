export class AssetItem {
    file: string;
    type: string;
    width: number;
    height: number;
}

export class News {
    id: string;
    Url: string;
    Section: string;
    SectionId: string;
    Title: string;
    Spot: string;
    Content: string;
    CreatedDate: string;
    ModifiedDate: string;
    Thumbnail: string;
    AssetList: AssetItem[];  
}

export class Section {
    id: string;
    Url: string;
    Name: string;
}

export class Comment {
    name: string;
    email: string;
    message: string;
}