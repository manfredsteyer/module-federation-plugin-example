import { isPlatformBrowser, isPlatformServer } from "@angular/common";
import { inject, PLATFORM_ID } from "@angular/core";

export function isServer(): boolean {
    return isPlatformServer(inject(PLATFORM_ID));
}

export function isBrowser(): boolean {
    return isPlatformBrowser(inject(PLATFORM_ID));
}