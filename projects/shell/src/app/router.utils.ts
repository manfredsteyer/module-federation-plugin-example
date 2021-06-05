import { UrlMatcher, UrlSegment } from '@angular/router';

export function startsWith(prefix: string): UrlMatcher {
    return (url: UrlSegment[]) => {
        const fullUrl = url.map(u => u.path).join('/');
        if (fullUrl.startsWith(prefix)) {
            return ({ consumed: url});
        }
        return null;
    };
}