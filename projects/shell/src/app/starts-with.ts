import { UrlMatcher, UrlSegment } from "@angular/router";

export function startsWith(path: string): UrlMatcher  {
    return (segments: UrlSegment[]) => {
      return segments[0].path === path
        ? { consumed: segments }
        : { consumed: [] };
    };
  }