/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-bd6328fcaa855b162015.js"
  },
  {
    "url": "styles.bcf1a9b3fc90df14fd1a.css"
  },
  {
    "url": "styles-c8b92aa010215b9c348d.js"
  },
  {
    "url": "commons-668f6f4ff43a3b8c8800.js"
  },
  {
    "url": "app-2d3171097f78d728f9bb.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-5a6b888a779cb927bc22.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "00f167624d1e96b0b3220ef0049182c2"
  },
  {
    "url": "google-fonts/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eRhf6.woff2",
    "revision": "2ecb426f85ffc1c53b677556210e629f"
  },
  {
    "url": "google-fonts/s/firasans/v10/va9B4kDNxMZdWfMOD5VnPKreRhf6.woff2",
    "revision": "b39aa336eef260975654fde0959de6fe"
  },
  {
    "url": "google-fonts/s/firasans/v10/va9B4kDNxMZdWfMOD5VnSKzeRhf6.woff2",
    "revision": "5a2c789b59571ce97f51f9c75600f49b"
  },
  {
    "url": "google-fonts/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveRhf6.woff2",
    "revision": "d8bc03a60729f4b05b42e057e21eaed3"
  },
  {
    "url": "google-fonts/s/firasans/v10/va9C4kDNxMZdWfMOD5Vn9LjJYTI.woff2",
    "revision": "d67acf5dba25b4f92e3eadad20032199"
  },
  {
    "url": "google-fonts/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvl4jL.woff2",
    "revision": "78773521b0ffe376bc7edd8ec2a591fb"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2",
    "revision": "e535f7856b24153e0f3146e8f90a45c5"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2",
    "revision": "e8794816c5eaeaa9dd20a6d77ea3b272"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2",
    "revision": "aa4405ed937295296cf8510f437628e0"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2",
    "revision": "61e2d96d01a7eba5ea3ec1bad7e736a8"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiEyp8kv8JHgFVrJJfecg.woff2",
    "revision": "1a280523d375e9358d5229df34fc8e94"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "c355c8040c47a63bfb3360e4b7cb6553"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "e757fd73578c4436c03cdf5ad969d047"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

const navigationRoute = new NavigationRoute(async ({ event }) => {
  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-2d3171097f78d728f9bb.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  return await caches.match(offlineShell)
})

workbox.routing.registerRoute(navigationRoute)

const messageApi = {
  setPathResources(event, { path, resources }) {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources(event) {
    event.waitUntil(idbKeyval.clear())
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data
  if (gatsbyApi) messageApi[gatsbyApi](event, event.data)
})
