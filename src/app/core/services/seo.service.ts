import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Injectable(
    { providedIn: 'root'}
)
export class SEOService {

    constructor(
        @Inject(DOCUMENT) private dom: Document,
        private meta: Meta,
        private title: Title
    ) {

    }

    createCanonicalLink(url?: string) {
        let canURL = url == undefined ? this.dom.URL : url;
        let link: HTMLLinkElement = this.dom.createElement('link');
        link.setAttribute('rel', 'canonical');
        this.dom.head.appendChild(link);
        link.setAttribute('href', canURL);
    }

    public addTag(name: string, description: string) {
        this.meta.addTag({
            name: name,
            content: description
        })
    }

    public removeTag(name: string) {
        this.meta.removeTag(`name=${name}}`);
    }
     
}