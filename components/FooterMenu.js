import { tagline } from '../config';
import FooterMenuItem from './FooterMenuItem';

export default () => (
  <nav>
    <FooterMenuItem href="/" text="Home" title={tagline} />
    <FooterMenuItem href="/services" text="Services" title="What do I do" />
    <FooterMenuItem href="/portfolio" text="Portfolio" title="Some of the things I did" />
    <FooterMenuItem href="/contact" text="Contact" title="Let's talk!" />
    <FooterMenuItem href="/terms-and-conditions" text="Terms & Conditions" title="Terns and conditions" />
  </nav>
);
