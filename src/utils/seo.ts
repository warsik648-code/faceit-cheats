import { SITE } from '../data/site';
import type { PageSeo } from '../data/seo';
import { absoluteUrl } from './urls';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface ResolvedSeo {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
}

export function resolveSeo(page: PageSeo): ResolvedSeo {
  const canonical = absoluteUrl(page.path);

  return {
    title: page.title,
    description: page.description,
    canonical,
    robots: page.robots ?? SITE.defaultRobots,
    ogTitle: page.ogTitle ?? page.title,
    ogDescription: page.ogDescription ?? page.description,
    ogUrl: canonical,
  };
}

export function homeBreadcrumb(): BreadcrumbItem {
  return { label: 'Home', path: '/' };
}

export function blogBreadcrumb(): BreadcrumbItem {
  return { label: 'Blog', path: '/blog/' };
}
