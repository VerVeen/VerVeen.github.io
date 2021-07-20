'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2b00042f7481c7b056c4b410d28f33cf",
".git/config": "89be0884b5e7318196e638adacbb2fca",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "da690af36356bc4aeb730aecbf56a468",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8e93b7e8583b85508f07d43591518d2f",
".git/logs/refs/heads/master": "8e93b7e8583b85508f07d43591518d2f",
".git/logs/refs/remotes/origin/master": "e159639efa8ce86731a31675be3bb331",
".git/objects/18/ae30c54ec5187f1ffb63a60b569cc85f334de4": "cfc93bbe850191c8d07f17011662b855",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/a5f92ba98d0e665469ac5e0e40c8395c3a5ca8": "b358d4ccd7f5add471312251ea21b765",
".git/objects/30/483b7f7bbe4103b89c695c526eed2f01162217": "fd261ee733c9086221f7bdaad687d7c5",
".git/objects/31/290969c53755faff5f2a88b43484d80b56ab3f": "95b71b63a57a79358518ef9e9fe6abfd",
".git/objects/36/0e9c13ab5f5ed58e10842632be32304862c84b": "213fbbb5ead186c68cee6702475a6b4d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/6871f4776bf3bf45288942f5094e8d583bd55e": "4b18fd1e638db069054698091a47e5b4",
".git/objects/5a/c59fddc7c1be30d954020bef7d70860b42841a": "d95d1f2456010ed44d193d884b053a3c",
".git/objects/6b/28b5ce0e9082c1b7d5c180ae142805ec981550": "9d15fe6071d0acfbaed67ac15d3ccdaf",
".git/objects/6c/b6d8c7c3a1830caa0ba584cc4936a111813390": "bb766a3298314cefbe89d780153fffdf",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/f9dd62503256cda347b4769a773e08cf8efe4f": "50ee86fc59c357dbe4f1b5957449ecd7",
".git/objects/80/17dcc46e77a0b5437fda05956e2b5102238e6e": "477893eb52a0186cc56cd3c3ef2fa889",
".git/objects/82/cebd79b4dadacf0870db754af10528478e2814": "119ac7fdb4810a1e5122f212d6ef8f01",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/a814e7331ebe5fdbb52de383a5ad77a27db9d1": "3e45204e2df0769be4860719bee78089",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/be/06bd542b0913c69f33c266076ea69387d776f9": "913e7848d381b5e77fc45a30bd039aa2",
".git/objects/c1/dfb1bf57033006b10cc97ddcb6e0c87f0f8ee8": "4f40e5706d6e1e4e322e1d2e46a71f80",
".git/objects/c4/40845e70aa041efc1e3dfcefac9c06f9073839": "450f818f84c3567571b76003d7777dcc",
".git/objects/c6/10051f45e3a97654e10339cacbb8782abe798a": "9ba5fe7e795d5b1aeea8202e2f23b569",
".git/objects/cd/14a668e9425cb922a2846ed2bfcfc1ead134ad": "a0f2bb7f26d81760a6c14764ca1ed56c",
".git/objects/cf/5652e6216923c7193edde0b1e634fa3963a6ea": "5d9962ffab92ff5d989bc8081e9079bb",
".git/objects/d7/fff1f9a774e76e4a0da6174c97a0574e1fdb3c": "e2a3e465b0349fc7eb84597610a97b7a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/refs/heads/master": "dc577dd6a064e68bb8a3f670ece6a910",
".git/refs/remotes/origin/master": "dc577dd6a064e68bb8a3f670ece6a910",
"assets/AssetManifest.json": "1c779a74f6c4b11caf85dac99a9c5aaa",
"assets/assets/add_img.png": "5e5aeed754edd34091829ad646c9e2a0",
"assets/assets/loading_img.gif": "fcd8d05ca2a2981b7680f6b1b322c80e",
"assets/assets/marker.png": "ecf7a9c44ced375245331760df75cc7d",
"assets/assets/no_image.png": "8879ecb9799bdfacf16ae2a8606b7d9d",
"assets/assets/target.png": "b673dabc014db9822607599a1994a8b2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "d53775e186cb1a40c17b351818154f8c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "7f78122ede9e25c31bf76da7f600a753",
"/": "7f78122ede9e25c31bf76da7f600a753",
"main.dart.js": "ef8226b09f05cabe2b2b1f0539b150c1",
"manifest.json": "2deb9cb04446dbe92bd3e96e416a432d",
"version.json": "a0cfd25587461a49402097ef5a754dfe"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
