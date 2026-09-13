import type { GameId } from '../data/games';
import type { ExternalAction } from '../data/site';
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

export function resolveExternalUrl(action: ExternalAction): string {
  const specific = SITE.external[`${action}Url`];

  if (specific) {
    return specific;
  }

  if (SITE.external.destinationUrl) {
    return SITE.external.destinationUrl;
  }

  if (action !== 'support' && SITE.external.transactionUrl) {
    return SITE.external.transactionUrl;
  }

  return SITE.external.supportUrl;
}

export function hasExternalUrl(action: ExternalAction): boolean {
  return resolveExternalUrl(action).length > 0;
}

function productAffiliateUrl(params?: Record<string, string>): string | undefined {
  const game = params?.game;

  if (!game) {
    return undefined;
  }

  return SITE.external.affiliateUrl[game as GameId];
}

export function transactionUrl(params?: Record<string, string>): string {
  return withTracking(productAffiliateUrl(params) ?? resolveExternalUrl('transaction'), params);
}

export function accessUrl(params?: Record<string, string>): string {
  return withTracking(productAffiliateUrl(params) ?? resolveExternalUrl('access'), params);
}

export function supportUrl(params?: Record<string, string>): string {
  return withTracking(resolveExternalUrl('support'), params);
}

export function externalHost(action: ExternalAction): string {
  const href = resolveExternalUrl(action);

  try {
    return new URL(href).host;
  } catch {
    return href;
  }
}

export function isHomePath(pathname: string): boolean {
  return pathname === '/' || pathname === '';
}

export function isStatusPath(pathname: string): boolean {
  return pathname === '/status/' || pathname === '/status';
}

export function isFaqPath(pathname: string): boolean {
  return pathname === '/faq/' || pathname === '/faq';
}

export function isBlogPath(pathname: string): boolean {
  return pathname === '/blog' || pathname === '/blog/' || pathname.startsWith('/blog/');
}

/** Homepage, status, FAQ, and blog: internal CTAs only, no external checkout. */
export function isInternalChromePath(pathname: string): boolean {
  return isHomePath(pathname) || isStatusPath(pathname) || isFaqPath(pathname) || isBlogPath(pathname);
}

export function isActivePath(currentPath: string, href: string): boolean {
  if (href === '/') {
    return currentPath === '/';
  }

  return currentPath === href || currentPath.startsWith(href);
}
