export class Folder {
    id: string;
    title: string;
    thumbnail: any;
    itemCount: number;
    items = new Array();

    constructor(item?: any) {
        this.id = item.id;
        this.title = item.metadata.title;
        this.thumbnail = item.thumbnail.url;
        this.itemCount = item.itemCount;
        this.items = item.parsedItems;
    }
}
