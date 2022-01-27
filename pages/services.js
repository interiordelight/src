import CallToAction from '../components/CallToAction';
import Content from '../components/Content';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import ServicesHead from '../components/ServicesHead';
import Title from '../components/Title';

const title = 'Services';

export default function ServicesPage() {
  return (
    <Layout title={title} activeMenuItem="services" showFooterBanners>
      <ServicesHead />
      <Hero picture="interior-1" text="Art. Engineering. Economics.|Skilfully combined." />
      <Content>
        <Title text={title} />
        <p>
          Based on my extensive{' '}
          <a href="https://www.behance.net/iflorescu" target="_blank" rel="noopener noreferrer">
            experience
          </a>{' '}
          in interior design, 3D modeling and visualization, and a network of top-level professional partners skilled in
          architectural drawings, photography, image post-processing, and even web design and development, I am offering
          the following services:
        </p>

        <h4>Interior Design</h4>
        <p>
          To ensure a successful design that suits client demands, my projects consist of building 3D models based on
          architectural blueprints provided by the client and/or my own measurements of the space, completed with
          photorealistic renderings that help with the process of developing the design and, in the end, provide an
          accurate image of the finished product. Depending on the clients&apos; wishes I can also provide assistance
          with contractors and with the purchase of different products (such as furniture, lighting, accessories, etc.)
          and also assistance during the execution process.
        </p>

        <h4>3D Modeling & Visualization</h4>
        <p>
          3D visualization is a significant part of my work. Aside from its&apos; purpose of developing and illustrating
          the design ideas, it is a form of art in itself and I continuously work to make it more and more realistic.
          All the images on this website were commissioned by customers or are part of my own personal projects.
        </p>

        <h4>Furniture Design</h4>
        <p>
          Every project is unique and, more often than not, dimensional or functional constraints require custom
          furnishing. With previous experience in a company producing custom furniture from melamine faced chipboard,
          I&apos;m also designing furniture (kitchen cabinets, wall units, bedroom furniture, dressing units, auxiliary
          furniture, etc.), either as part of an interior project or as a standalone project.
        </p>

        <h4>Digital Graphics & Web Development</h4>
        <p>
          As part of my creative process, I&apos;m also producing graphic elements and compositions for interior
          decorating purposes, presentation and catalogue layouts, logo design, banner design, websites and web
          application development.
        </p>
        <CallToAction>
          <hr />
          <p>
            Have a look at my <a href="/portfolio">portfolio</a> to see a few samples of our work. Or better yet…
          </p>
        </CallToAction>
      </Content>
    </Layout>
  );
}
