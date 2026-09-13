import type { FaqItem } from '../data/faq';
import { SITE } from '../data/site';
import type { BreadcrumbItem } from './seo';
import { absoluteUrl } from './urls';

const ORGANIZATION_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

export function organizationJsonLd() {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: SITE.legalName,
    url: SITE.url,
    description:
      'FACEIT Cheats publishes game-organized information and products for the FACEIT competitive platform.',
  };
}

export function websiteJsonLd() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE.name,
    url: SITE.url,
    inLanguage: SITE.language,
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.path ? { item: absoluteUrl(item.path) } : {}),
    })),
  };
}

export function blogPostingJsonLd(article: {
  title: string;
  description: string;
  path: `/${string}` | `/${string}/`;
  datePublished: Date;
  dateModified?: Date;
  author: string;
  image?: string;
}) {
  const url = absoluteUrl(article.path);

  return {
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished.toISOString(),
    dateModified: (article.dateModified ?? article.datePublished).toISOString(),
    author: {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: article.author,
    },
    publisher: { '@id': ORGANIZATION_ID },
    mainEntityOfPage: url,
    url,
    inLanguage: SITE.language,
    ...(article.image ? { image: absoluteUrl(article.image) } : {}),
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function jsonLdGraph(nodes: Record<string, unknown>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
