enum Media {
    image = 'image',
    video = 'video',
    unknown = 'unknown'
}

export class Apod {
    title = '';
    date = '';
    explanation = '';
    url = '';
    hdurl = '';
    mediaType = Media.unknown;
    constructor(json?: any) {
        if (json) {
            this.title = json.title;
            this.date = json.date;
            this.explanation = json.explanation;
            this.url = json.url;
            this.hdurl = json.hdurl;
            this.mediaType = json.media_type;
        }
        else {

        }
    }

    isImage(): boolean {
        return this.mediaType === Media.image;
    }

    isVideo(): boolean {
        return this.mediaType === Media.video;
    }

    
    getVideoId(): string{
        let url = this.url;
        let id = '';
        console.log('URL: ' + url);
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        id = (match&&match[7].length==11)? match[7] : '';
        console.log(id);
        return id;
    }

}