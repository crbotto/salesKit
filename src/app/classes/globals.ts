export class Globals {
    //variables to be used on any service that implements http calls
    API_PROXY = 'https://jsonp.afeld.me/?url=';
    API_AUTH = '?productId=201458d47426431b827dd10b7448a0ab&accessToken=468c740cedfb464caf6064ee28dcaebe&accessType=view';
    API_URL = 'https://launchpadapi.mediafly.com/3/items';

    //default image to be displayed when fails to get the thumbnail
    defaultImageUrl="https://launchpadapi.mediafly.com/3/content/194960/DefaultThumbnailfolder?productId=201458d47426431b827dd10b7448a0ab";

    // Messages
    openFileMSG = 'Click on the image to open the File';
    openFolderMSG = 'Click on the box to open the Folder';
    openFileError = 'Error while opening file ';
}
