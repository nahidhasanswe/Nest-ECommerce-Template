import { DOCUMENT, isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID, Renderer2, RendererFactory2 } from "@angular/core";

@Injectable({
  providedIn: 'root'  
})
export class GMapService {

    private doc: Document;
    private renderer: Renderer2

    constructor(
        @Inject('API_KEY') private APIKey: string,
        @Inject(DOCUMENT) private injectedDocument: any,
        @Inject(PLATFORM_ID) private platformId: Object,
        private rendererFactory: RendererFactory2
    ) {
        this.doc = injectedDocument as Document;
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    public initialize(): void {
        this.loadScripts();
    }

    private loadScripts(): void {

        if (this.isLoaded())
            return;

        const scriptElement = this.renderer.createElement('script');
        this.renderer.setAttribute(scriptElement, 'id', 'map-script');
        this.renderer.setAttribute(scriptElement, 'type', 'text/javascript');
        this.renderer.setAttribute(scriptElement, 'src', `https://maps.googleapis.com/maps/api/js?key=${this.APIKey}`);
        this.renderer.appendChild(this.doc.head, scriptElement);
    }

    private isLoaded(): boolean {
        if (isPlatformBrowser(this.platformId)) {
          const mapScript = this.doc.getElementById('map-script');
          return !!mapScript;
        }
        return false;
    }
}