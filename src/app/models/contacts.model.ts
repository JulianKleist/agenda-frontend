import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

export class Contact {
    constructor(
        public name: string,
        public phone: string,
        public lastname?: string,
        public address?: string,
        public img?: string,
        public _id?: string
    ) {}

    // get imageUrl () {
    //     // /upload/contacts/d7291923-f50d-4d91-a7a5-af8f086de844.png
    //     if ( this.img ) {
    //         return `${ base_url }/upload/contacts/${ this.img }`;
    //     } else {
    //        return `${ base_url }/upload/contacts/no-img`;
    //     }
    // }
}