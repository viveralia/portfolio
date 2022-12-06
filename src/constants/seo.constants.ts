import type { Props } from 'astro-seo'

export const seo: Props = {
  title: 'Iván Viveros | Frontend Software Engineer',
  description: 'I’m Iván, a software engineer, mainly focused on frontend. Click to take a look at my most recent projects.',
  openGraph: {
    basic: {
      title: 'Portfolio | Iván Viveros',
      type: 'website',
      image: '/opengraph.png',
      url: 'https://viveralia.com',
    },
    optional: {
      description: 'I’m Iván, a software engineer, mainly focused on frontend. Click to take a look at my most recent projects.',
      locale: 'en-MX',
    },
    image: {
      type: "image/png",
      width: 1200,
      height: 630,
      alt: 'Image showcasing my three most relevant projects: Eliss, Twenty First and Positiva',
    }
  }
}
