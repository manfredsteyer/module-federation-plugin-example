import { inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';

export type Manifest = Record<string, string>;

@Injectable({ providedIn: 'root' })
export class ManifestLoader {
  private manifestUrl = '/assets/mf.manifest.json';
  private manifest: Manifest | undefined;
  private request = inject<Request>(REQUEST, { optional: true });
  private http = inject(HttpClient);

  configure(url: string) {
    this.manifestUrl = url;
  }

  getBaseUrl(): string {
    if (!this.request) {
      return '';
    }

    const fwdHost = this.request.header('x-forwarded-host');
    const fwdProto = this.request.header('x-forwarded-proto');

    if (fwdHost && fwdProto) {
      return `${fwdProto}://${fwdHost}`;
    }

    return `${this.request.protocol}://${this.request.get('host')}`;
  }

  get(): Observable<Manifest> {
    const base = this.getBaseUrl();
    const url = base + this.manifestUrl;
    return this.http.get<Manifest>(url);
  }
}
