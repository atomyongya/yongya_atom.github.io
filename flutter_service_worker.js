'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "709b6d84ab2bce9655f77841fd459645",
"assets/AssetManifest.json": "823c5dce380d915ed9d9e1ad49ecd9cd",
"assets/assets/images/iPhone.png": "663bac76b7bd23683bb426e3735b027b",
"assets/assets/images/myImage.png": "58af9c62c16886d301723aaf089eaf92",
"assets/assets/images/social_link/linkedin.png": "ceec71c9f7e42419a8ed09aeec6ffcd4",
"assets/assets/images/social_link/gmail.png": "0022bf2fa617258cfda5d0ecb84c4b47",
"assets/assets/images/social_link/medium.png": "3de7cac1cb637c2b0588de5b766b795a",
"assets/assets/images/social_link/github.png": "43298f53fbd00b8582fd1a9a7adf1197",
"assets/assets/images/computer.jpg": "21ad21c4f18fccd366715ede0140b021",
"assets/assets/images/android.png": "7af5ab7ca5842a618998cbf0db19978e",
"assets/assets/images/basketball.jpg": "6925c7b1e45b9c0734ef5f748ce94e3e",
"assets/assets/images/code.jpg": "455a3954dfea15c931a5b2e29cd4f065",
"assets/assets/images/hill.jpg": "28b167f08d70398c395db870bc695dda",
"assets/assets/images/music.jpg": "79433d2bbd96ad6f9b065c958c1ab9ef",
"assets/assets/local_data/info_list.json": "88ec64ca1d86d07df178d22ee85c24e2",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"index.html": "16bf89df8b29ac71e84ffba4babfdacd",
"/": "16bf89df8b29ac71e84ffba4babfdacd",
"version.json": "8adf3e48b5040ee625bbb04cee942d42",
"manifest.json": "1ce63c6d5aefa24b619a373242233316",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js": "6067563a8421e7f63592397c3a3b016a",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/objects/39/e838e9b1320936342966346de7cf0c35cf5d0e": "dafb5c3f4bb568d34db5439484f13c3a",
".git/objects/dd/b185e63d71e42a181af03d7fa0807649f4e82f": "816184f247b4ba8df55bf3a494256d30",
".git/objects/57/3a80bad9aa8c57d9de8f42d4af757b9d741af5": "d1d29eb7bf15a01fa7d71e8154b0a97e",
".git/objects/15/abe5c1af34585df2c8ca9eb6fc9016eba2838b": "740f9f5e30e38c4b199ec13ba41b9aaa",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/04/b715106ec16fd5045fe783dd7da3d06ff7f2e1": "6cfa52fe6011f0b2c7292732750a21ad",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/11/092c714c619d001af97c8a7c363ead5b23c7a3": "1cc0be7793f1020a14b18ba0894e20b7",
".git/objects/12/340dcfea3be34ae3227ab7f5f52fc5a0db897e": "2c868d60fbb0ec04b2cb56246aabf6cb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/3f/c81b8b2fe95b3571f79a73a528755dd5e4b07f": "c775d8306e4244032ecd9354f3056bcd",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/26382f747d257a940f15989e7f9e405ada2f90": "3b7b91bf76ebb9af04a77388292176ee",
".git/objects/5c/86193c07731d223462da17b2a4834f4883335c": "db31578b2cc0d9d4291dca6f20fdd9a9",
".git/objects/ae/49319d56340a196538241b23504609a4a5ae92": "04d06f9100f9270feca74174387f27df",
".git/objects/f7/8afc75836bfd240500a9cb9d331a007ea124d0": "673421531765e72173dc1102e7829888",
".git/objects/fb/6f3a60e03894b54b91cf00c4087c96f5fe6426": "d4af401e287ebf688c8cf7e01596d562",
".git/objects/b5/541f38380cfbbdf769ec7a968f94fd7c376c39": "82d50086cf97ca5d847f02b3a28b7442",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/85/2c9f0febba4b87a5569cdf4986f9b169d5aac4": "6aeeb2961fa1adc7bffc7cf3ecee29f9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/bd/c94a1f4ffda161f3e80c75df876c1bc13b8233": "62fb9e5a4d83ceed73092bf9ddd6aa99",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/38/3e610a78401b6538de9f7eaf244723c8e6af34": "e86b5372818a469258a71e0bbcf57e83",
".git/objects/26/74a07d060acb3870711c21d92ee59fd38722c1": "cb6b9514dd3059ca32da60804547dc9a",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/97/6c79c81f3c717a82d0f9fbd04a913623205230": "de0efbe02125b8dd518979349a3e1eb0",
".git/objects/5a/36e9d1d40f63ba7c980605f4e5c98a9c158035": "b720c755d9fff43634ccebdc63ad8ac4",
".git/objects/ca/51a179b4ec96e4c13a4fa519c3774a13e02d87": "f6869dc82c8be965c48451fe07afa58e",
".git/objects/ab/43008fdcf9cc39d74393e43611f930e384e4b5": "ece17c32d0a1ea8fa68a9eff97055d18",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/7d/993a8c7e61c6b13326d727193bd64c2ffd4d71": "dd63f7b549a6663fb30bcc024fabe195",
".git/objects/91/ebfd3952a404f32391ad6fb750b3a288531472": "55ca0af90b632894c32d33c5b8190dd1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/d4/95b1c5f168025ce0a12bc0643e404ad20a8155": "8a9b4350cefeb966b151c34bfc0a1962",
".git/objects/d4/5d164621b4a60f3ccdc343d0ef4797f2a47315": "bfa3196f3fe57fcbad6776e17554f9ad",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/4c/39bed910f170123017bf6998b9d9d63cdeffdb": "2be2e294205a0a002470aa48aa135382",
".git/objects/c4/2f24e78ecfc1a0c25dda9cca893cab6bc60421": "3ee6b6876d96c226ceecc67a3ac373e6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/0560f7123f55913fba274e0a137eeac4dfb734": "ae261fb536d98bbbafb068c6a04de3ba",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/refs/heads/master": "1ef7747310580cab492d858f2dc7a23c",
".git/refs/remotes/origin/master": "1ef7747310580cab492d858f2dc7a23c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/COMMIT_EDITMSG": "ec4d59b2732f2f153240a8ff746282a6",
".git/logs/refs/heads/master": "6dcf026b31c03ddc9b1f1a4609ef3270",
".git/logs/refs/remotes/origin/master": "7a2fe54c48ed9efda8a8e81591ff2c6c",
".git/logs/HEAD": "6dcf026b31c03ddc9b1f1a4609ef3270",
".git/config": "758f6dbc493e2bb4b4b0a9d0c2be696d",
".git/index": "7f2c079d13fa74835c8b71ea8976d637",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
