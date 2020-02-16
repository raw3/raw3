import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ImageSize } from '@shared/enums';
import { Blog, Photo, Project } from '@shared/models';
import { MetaContent } from '../types';
import { getImagePathUtility } from '../utilities';

@Injectable({providedIn: 'root'})
export class SEOService {
  private readonly name = 'Richard Andries Wols';
  private readonly defaultHeight = '1350';
  private readonly defaultWidth = '2160';
  private readonly defaultImageType = 'image/jpg';

  constructor (
    private readonly meta: Meta,
    private readonly title: Title
  ) {
  }

  private setPageMetaInformation (metaContent: MetaContent) {
    const parsedTitle = metaContent.title.replace(/<[^>]+>/g, '');
    const parsedDescription = metaContent.description.replace(/<[^>]+>/g, '');

    this.title.setTitle(parsedTitle);
    this.meta.updateTag({property: 'og:title', content: parsedDescription});
    this.meta.updateTag({name: 'description', content: parsedDescription});
    this.meta.updateTag({property: 'og:description', content: parsedTitle});
    this.meta.updateTag({property: 'og:image', content: metaContent.image.url});
    this.meta.updateTag({property: 'og:image:secure_url', content: metaContent.image.url});
    this.meta.updateTag({property: 'og:image:type', content: metaContent.image.type});
    this.meta.updateTag({property: 'og:image:width', content: metaContent.image.width});
    this.meta.updateTag({property: 'og:image:height', content: metaContent.image.height});
    this.meta.updateTag({property: 'og:image:alt', content: metaContent.image.alt});
    this.meta.updateTag({property: 'twitter:site', content: '@raw397172392'});
    this.meta.updateTag({property: 'twitter:creator', content: '@RichAndrWols'});
    this.meta.updateTag({property: 'twitter:card', content: metaContent.twitterCard});
  }

  setBlogOverviewSEO (blog: Blog) {
    this.setPageMetaInformation({
      description: `${this.name} - Blogs about my digital nomad life`,
      image: {
        alt: blog.prologue.image.alt,
        height: this.defaultHeight,
        type: this.defaultImageType,
        url: `https://raw3.io${getImagePathUtility(ImageSize.M, blog.prologue.image.path)}`,
        width: this.defaultWidth
      },
      title: 'raw3 - blogging',
      twitterCard: 'summary'
    });
  }

  setBlogDetailSEO (blog: Blog) {
    this.setPageMetaInformation({
      description: blog.description,
      image: {
        alt: blog.prologue.image.alt,
        height: this.defaultHeight,
        type: this.defaultImageType,
        url: `https://raw3.io${getImagePathUtility(ImageSize.M, blog.prologue.image.path)}`,
        width: this.defaultWidth
      },
      title: `raw3 - blogging | ${blog.title}`,
      twitterCard: 'summary_large_image'
    });
  }

  setPhotoDetailSEO (photo: Photo) {
    this.setPageMetaInformation({
      description: photo.image.caption,
      image: {
        alt: photo.image.alt,
        height: '1800',
        type: this.defaultImageType,
        url: `https://raw3.io${getImagePathUtility(ImageSize.XL, photo.image.path)}`,
        width: '2880'
      },
      title: `raw3 - photography | ${photo.image.title}`,
      twitterCard: 'summary_large_image'
    });
  }

  setPhotoOverviewSEO (photo: Photo) {
    this.setPageMetaInformation({
      description: `${this.name} - Photography from all over the world`,
      image: {
        alt: photo.image.alt,
        height: this.defaultHeight,
        type: this.defaultImageType,
        url: `https://raw3.io${getImagePathUtility(ImageSize.M, photo.image.path)}`,
        width: this.defaultWidth
      },
      title: 'raw3 - photography',
      twitterCard: 'summary'
    });
  }

  setProjectDetailSEO (project: Project) {
    this.setPageMetaInformation({
      description: project.description,
      image: {
        alt: project.image.alt,
        height: this.defaultHeight,
        type: this.defaultImageType,
        url: `https://raw3.io${getImagePathUtility(ImageSize.M, project.image.path)}`,
        width: this.defaultWidth
      },
      title: `raw3 - programming | ${project.title}`,
      twitterCard: 'summary_large_image'
    });
  }

  setProjectOverviewSEO (project: Project) {
    this.setPageMetaInformation({
      description: 'Richard Andries Wols - Programming projects I\'m proud of',
      image: {
        alt: project.image.alt,
        height: this.defaultHeight,
        type: this.defaultImageType,
        url: `https://raw3.io${getImagePathUtility(ImageSize.M, project.image.path)}`,
        width: this.defaultWidth
      },
      title: 'raw3 - programming',
      twitterCard: 'summary'
    });
  }

  setDefaultSEO () {
    this.setPageMetaInformation({
      description: `${this.name} - A digital nomad photographing the world as a freelance programmer.
        Check out my world photography, read my blogs about the digital nomad life, and see my portfolio programming projects.`,
      image: {
        alt: 'The logo of raw3 raw3.io',
        height: '600',
        type: this.defaultImageType,
        url: `https://raw3.io/assets/images/logo/raw3-logo.jpg`,
        width: '600'
      },
      title: 'raw3 - freelance digital nomad programmer photographing the world',
      twitterCard: 'summary'
    });
  }
}
