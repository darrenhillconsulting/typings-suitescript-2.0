/** Load the clientCertificate module to send SSL requests with a digital certificate. */

import type {ClientResponse} from '../https';

export function post(options: { url: string, certId: string, body: string, headers?: { [key: string]: any } }): ClientResponse;
export function get(options: GetDeleteOptions): ClientResponse;
export function put(options: { url: string, certId: string, body: string, headers?: { [key: string]: any } }): ClientResponse;
declare const deleteFunc: DeleteMethod; // Workaround for the fact that "delete" is a JS keyword.
export {deleteFunc as delete};
export function request(options: RequestOptions): ClientResponse;

interface DeleteMethod {
  (options: GetDeleteOptions): ClientResponse;
}

interface GetDeleteOptions {
  /** The URL address of the remote server. */
  url: string;
  /** The ID of the client certificate. */
  certId: string;
  /** The HTTPS headers associated with the request. */
  headers?: { [key: string]: any };
}

interface RequestOptions {
  /** The URL address of the remote server. */
  url: string;
  /** The REQUEST data to be sent to the remote server. Required for PUT and POST methods | optional for HEAD, GET, DELETE. */
  body?: string;
  /** The ID of the client certificate. */
  certId: string;
  /** The HTTPS headers associated with the request. */
  headers?: { [key: string]: any };
  /** The HTTP method to be used. Use the https.Method enum to set this value. */
  method: string;
}
