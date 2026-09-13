import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

export function isPublishedPost(post: BlogPost): boolean {
  return post.data.draft !== true;
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog', isPublishedPost);

  return posts.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}

export function blogPath(post: BlogPost): `/blog/${string}/` {
  return `/blog/${post.data.slug}/`;
}

export function blogSeoTitle(post: BlogPost): string {
  return post.data.seoTitle ?? `${post.data.title} | FACEIT Cheats Blog`;
}

export function formatBlogDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function getFeaturedPosts(posts: BlogPost[]): BlogPost[] {
  const featured = posts.filter((post) => post.data.featured);

  return featured.length > 0 ? featured : posts.slice(0, 1);
}

export function getRelatedPosts(current: BlogPost, posts: BlogPost[], limit = 2): BlogPost[] {
  const others = posts.filter((post) => post.id !== current.id);

  const ranked = others
    .map((post) => {
      let score = 0;

      if (post.data.category === current.data.category) {
        score += 3;
      }

      if (current.data.game && post.data.game === current.data.game) {
        score += 3;
      }

      score += post.data.tags.filter((tag) => current.data.tags.includes(tag)).length;

      return { post, score };
    })
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return b.post.data.publishDate.valueOf() - a.post.data.publishDate.valueOf();
    });

  const related = ranked.filter((entry) => entry.score > 0).map((entry) => entry.post);
  const fallback = others.filter((post) => !related.includes(post));

  return [...related, ...fallback].slice(0, limit);
}

export function postsForGame(posts: BlogPost[], gameId: BlogPost['data']['game']): BlogPost[] {
  if (!gameId) {
    return [];
  }

  return posts.filter((post) => post.data.game === gameId);
}

export function postsForCategory(posts: BlogPost[], category: BlogPost['data']['category']): BlogPost[] {
  return posts.filter((post) => post.data.category === category);
}
