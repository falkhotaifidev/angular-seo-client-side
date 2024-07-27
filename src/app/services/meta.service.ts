import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({ providedIn: 'root'})
export class MetaService {

  constructor(private title: Title, private meta: Meta) {}

  updateMetaTags(route: string) {
    var routeMetaTags = META_INFO.find((x) => x.route === route)?.tags;

    if (routeMetaTags) {
      this._updateTitleTag(routeMetaTags.title);
      this._updateDescriptionTag(routeMetaTags.description);
    }
  }

  //#region Private Methods

  private _updateTitleTag(title: string) {
    if (title) {
      this.title.setTitle(title);
      this.meta.updateTag({ name: 'og:title', content: title });
    }
  }

  private _updateDescriptionTag(description: string) {
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ name: 'og:description', content: description });
    }
  }

  //#endregion
}

export const META_INFO: MetaInfo[] = [
  {
      route: "/",
      tags:  {
          title: "Test SEO",
          description: "Playing with meta tags and titles to see how SEO interact with it."
      },
  },
  {
      route: "/about-me",
      tags:  {
          title: "About Me",
          description: "Every thing you will ever need to know about me you will find it here."
      },
  },
  {
      route: "/contact-me",
      tags:  {
          title: "Contact Me",
          description: "All ways that available to contact me."
      },
  }
]

export interface MetaInfo {route: string, tags: MetaTag}
export interface MetaTag {title: string, description: string}