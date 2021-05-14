export class File {
    id: string;
    title: string;
    thumbnail: any;
    description: string;
    createdDate: Date;
    modifiedDate: Date;
    modifiedBy: string;
    fileUrl: any;
    fileType: string;

    constructor(item?: any) {
        this.id = item.id;
        this.thumbnail = item.thumbnail.url;
        
        this.description = item.metadata.description;
        this.createdDate = item.created;
        this.modifiedDate = item.modified;
        this.modifiedBy = item.modifiedBy;
        this.fileType = item.fileType;
        switch(item.type) {
            case 'file':
                this.title = item.asset.filename;
                this.fileUrl = item.asset.url;
                break;

            case 'url':
                this.title = item.metadata.title;
                this.fileUrl = item.link;
        }
    }
}
