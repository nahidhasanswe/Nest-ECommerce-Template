import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

/**
 * Meta tag for social media
 */
const SOCIAL_TITLE = 'og:title';
const SOCIAL_DESCRIPTION = 'og:description';
const SOCIAL_TYPE = 'og:type';
const SOCIAL_URL = 'og:url';
const SOCIAL_IMAGE = 'og:image';

/**
 * Meta tag for TWITTER
 */
const TWITTER_TITLE = 'twitter:title';
const TWITTER_DESCRIPTION = 'twitter:description';
const TWITTER_TYPE = 'twitter:type';
const TWITTER_URL = 'twitter:url';
const TWITTER_CARD = 'twitter:card';
const TWITTER_IMAGE = 'twitter:image';

@Injectable(
    { providedIn: 'root'}
)
export class SEOService {
  
    /** Constructor */
    constructor(
        @Inject(DOCUMENT) private dom: Document,
        private meta: Meta,
        private title: Title
    ) {

    }

    /**
     * Create Canonical Link
     * @param url canonical url. If null then use DOM url
     */
    createCanonicalLink(url?: string) {
        let canURL = url == undefined ? this.dom.URL : url;
        let link: HTMLLinkElement = this.dom.createElement('link');
        link.setAttribute('rel', 'canonical');
        this.dom.head.appendChild(link);
        link.setAttribute('href', canURL);
    }

    /**
     * Add tag into HTML head
     * @param name Tag name. ex. og:title
     * @param description Tag content
     */
    public addTag(name: string, description: string) {
        this.meta.addTag({
            name: name,
            content: description
        })
    }

    /**
     * Remove meta tag
     * @param name Tag name which is removed from HTML head
     */
    public removeTag(name: string) {
        this.meta.removeTag(`name=${name}}`);
    }

    /**
     * Add title into meta tag
     * @param title Title of the items or service
     */
    public setTitle(title: string): void {
        this.title.setTitle(title);
        this.addTag(SOCIAL_TITLE, title);
        this.addTag(TWITTER_TITLE, title);
    }

    /**
     * Add description into meta tag
     * @param description Desriotion of the items or service
     */
    public setDescription(description: string): void {
        this.addTag('description', description);
        this.addTag(SOCIAL_DESCRIPTION, description);
        this.addTag(TWITTER_DESCRIPTION, description);
    }

    /**
     * Add type as meta tag
     * @param type Typer of the item or service
     */
    public setType(type: string): void {
        this.addTag(SOCIAL_TYPE, type);
        this.addTag(TWITTER_TYPE, type);
    }

    /**
     * Add image into meta tag
     * @param image Image of the item or service
     */
    public setImage(image: string): void {
        this.addTag(SOCIAL_IMAGE, image);
        this.addTag(TWITTER_IMAGE, image);
    }
     
    /**
     * Add url into meta tag
     * @param url Url of the page. Default value is DOM url
     */
    public setUrl(url?: string): void {

        let canURL = url == undefined ? this.dom.URL : url;

        this.addTag(SOCIAL_URL, canURL);
        this.addTag(TWITTER_URL, canURL);
    }
}