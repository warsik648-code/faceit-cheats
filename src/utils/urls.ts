import { SITE } from '../data/site';

export function absoluteUrl(path: string): string {
  return new URL(path, `${SITE.url}/`).href;
}

export function withTracking(
  baseUrl: string,
  params?: Record<string, string>,
): string {
  if (!params || Object.keys(params).length === 0) {
    return baseUrl;
  }

  const url = new URL(baseUrl);

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }

  return url.toString();
}

export function transactionUrl(params?: Record<string, string>): string {
  return withTracking(SITE.external.transactionUrl, params);
}

export function supportUrl(params?: Record<string, string>): string {
  return withTracking(SITE.external.supportUrl, params);
}

export function isActivePath(currentPath: string, href: string): boolean {
  if (href === '/') {
    return currentPath === '/';
  }

  return currentPath === href || currentPath.startsWith(href);
}
