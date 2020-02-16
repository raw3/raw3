import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SocialMediaURL } from '../../../shared/enums';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'raw3-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <footer class="clr--white">
      <div class="social-media-container">
        <raw3-icon-route-button
          [link]="facebookURL"
          [isExternal]="true"
          color="plain"
          description="Link to my facebook page"
          icon="facebook"
        ></raw3-icon-route-button>

        <raw3-icon-route-button
          [link]="instagramURL"
          [isExternal]="true"
          color="plain"
          description="Link to my instagram page"
          icon="instagram"
        ></raw3-icon-route-button>

        <raw3-icon-route-button
          [link]="linkedinURL"
          [isExternal]="true"
          color="plain"
          description="Link to my linkedin page"
          icon="linkedin"
        ></raw3-icon-route-button>

        <raw3-icon-route-button
          [link]="fiveHundredPixURL"
          [isExternal]="true"
          color="plain"
          description="Link to my 500px page"
          icon="500px"
        ></raw3-icon-route-button>
      </div>

      <p>
        © 2018 Richard Andries Wols, all rights reserved. Feel free to contact me at
        <a href="mailto:{{ emailAddress }}" aria-label="Send me an email" class="clr--white link">{{ emailAddress }}</a>.
      </p>
    </footer>
  `
})
export class FooterComponent {
  readonly emailAddress = SocialMediaURL.EMAIL;
  readonly instagramURL = SocialMediaURL.INSTAGRAM;
  readonly fiveHundredPixURL = SocialMediaURL.FIVE_HUNDRED_PIX;
  readonly linkedinURL = SocialMediaURL.LINKEDIN;
  readonly facebookURL = SocialMediaURL.FACEBOOK;
}
