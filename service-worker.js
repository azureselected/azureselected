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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bd6170542e9f163e25bbde8013b58361"
  },
  {
    "url": "assets/css/0.styles.8970f8ee.css",
    "revision": "3598d3815a9dc63cd89273845abe06da"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.73306d0f.js",
    "revision": "9c4da85868af4ed8b8c58738369d25a2"
  },
  {
    "url": "assets/js/11.cdc0498c.js",
    "revision": "cb0b2f0ec803050002460b509b4fe671"
  },
  {
    "url": "assets/js/12.f1189a7e.js",
    "revision": "4b567bc53680bb604384c7231170030a"
  },
  {
    "url": "assets/js/13.8d1cadf3.js",
    "revision": "207636dc7434edd551952a1d6d165b40"
  },
  {
    "url": "assets/js/14.f70e2e14.js",
    "revision": "8ef93f5e1d3abbaecea0bba5440a680d"
  },
  {
    "url": "assets/js/15.a6a42253.js",
    "revision": "2067dd828a36a4d57b13949dc06a8fa1"
  },
  {
    "url": "assets/js/16.1701ce8d.js",
    "revision": "e8bf7f93f837dd12da9bfbe24cc823a0"
  },
  {
    "url": "assets/js/17.2f736bcd.js",
    "revision": "7a4b3dd28b7abefbbb31d6418a39ebda"
  },
  {
    "url": "assets/js/18.60d65e9f.js",
    "revision": "d18a5dc47b3f9c5a9552d33a91252c48"
  },
  {
    "url": "assets/js/19.14616cf4.js",
    "revision": "4c7b78460f8af5741587ef52d5a69b7f"
  },
  {
    "url": "assets/js/2.024090f7.js",
    "revision": "ed926cadc31732b620577d49a5699f36"
  },
  {
    "url": "assets/js/20.e703d43f.js",
    "revision": "c71ee9877baf9a2a307f9e28c98f290e"
  },
  {
    "url": "assets/js/21.d05216b4.js",
    "revision": "07a19401214da34a834035b57292b40d"
  },
  {
    "url": "assets/js/22.708db4f6.js",
    "revision": "ad9106bb3218dcf51a5afc4c1bd3c529"
  },
  {
    "url": "assets/js/23.4ab642e7.js",
    "revision": "8622e34101b8fed6470430f239dd231b"
  },
  {
    "url": "assets/js/24.c90f9aca.js",
    "revision": "158c8ae665e57fd595b034aac9f69b1f"
  },
  {
    "url": "assets/js/25.fdef1bbd.js",
    "revision": "73af0528eb29e245f9b5d66d0efd8eff"
  },
  {
    "url": "assets/js/26.f72e0ce4.js",
    "revision": "f8d079043195baef2af115041bb86774"
  },
  {
    "url": "assets/js/27.3fe8a2c7.js",
    "revision": "95e0536497a06c62649999844b330fe8"
  },
  {
    "url": "assets/js/28.1a3e5654.js",
    "revision": "ada53f41888791f755bb7bf8b29fbc04"
  },
  {
    "url": "assets/js/29.ab3ffdc1.js",
    "revision": "bd63ea39a541ed7641fd114d07dc93f1"
  },
  {
    "url": "assets/js/3.c99638c5.js",
    "revision": "12e20176f3446bc033ced6d68e329889"
  },
  {
    "url": "assets/js/30.3cb7cb9d.js",
    "revision": "0d49fc6fb50edc325632b8d5ab157d9f"
  },
  {
    "url": "assets/js/31.b0012ddb.js",
    "revision": "6f698ca7977e95d06843af9248614776"
  },
  {
    "url": "assets/js/32.9d07dfd1.js",
    "revision": "7588751d2dc1ba0c9de988325b403ba3"
  },
  {
    "url": "assets/js/33.6426a877.js",
    "revision": "48d7ea768822e068c60cd90c4bfc5bea"
  },
  {
    "url": "assets/js/34.7871806e.js",
    "revision": "df53cf166805061250ab06405a92c178"
  },
  {
    "url": "assets/js/35.58e04de3.js",
    "revision": "b3bdfc2325e8c36f862d636d285e32f1"
  },
  {
    "url": "assets/js/36.48360d00.js",
    "revision": "5d7675ff4bba9d8d9ba553cd16bff435"
  },
  {
    "url": "assets/js/37.618ba80d.js",
    "revision": "2b398e95c3eebd6f8940e67d54e8dd73"
  },
  {
    "url": "assets/js/38.5ab77d87.js",
    "revision": "0c597be5678852f5853ed9a020213142"
  },
  {
    "url": "assets/js/39.e0745008.js",
    "revision": "69c38db5a549495fbcb5c976e7700f3b"
  },
  {
    "url": "assets/js/4.209f09af.js",
    "revision": "6177bcd1f8f58911e44ca80ff7bc469f"
  },
  {
    "url": "assets/js/40.72b3c759.js",
    "revision": "b6b3d3f40a21368074451f8f43bdf247"
  },
  {
    "url": "assets/js/41.be66d134.js",
    "revision": "02a428732c231939fdc4c3a9426bc0c5"
  },
  {
    "url": "assets/js/42.de96e99e.js",
    "revision": "81d2cf4b0d78a22297d0ce6b03d7de52"
  },
  {
    "url": "assets/js/43.640589ed.js",
    "revision": "63bfa6163a37d2b0888d2c1251b78d0d"
  },
  {
    "url": "assets/js/44.d0a1ae9c.js",
    "revision": "56c1638ede53e9538a819e5d79ea1a71"
  },
  {
    "url": "assets/js/45.dc2fa643.js",
    "revision": "42d84ac36a1fdf27ee57efd7a45c57f6"
  },
  {
    "url": "assets/js/46.86f5b515.js",
    "revision": "ea777782662a1b13d2fe0d7a7cdcfac9"
  },
  {
    "url": "assets/js/47.a1b3a06c.js",
    "revision": "e2521672d2cccdf8d4ce8d20bb1d1248"
  },
  {
    "url": "assets/js/48.b0c473fb.js",
    "revision": "d92f741ed7924e227e439f1497520989"
  },
  {
    "url": "assets/js/49.4fc5436e.js",
    "revision": "58df3c7fe9b6551aa8ba083c631950cc"
  },
  {
    "url": "assets/js/5.4abcb495.js",
    "revision": "46c54d19d48d297dae47f0813dc03112"
  },
  {
    "url": "assets/js/50.36b5f777.js",
    "revision": "0b480106ae5d1d4849f7b2e83543b5b8"
  },
  {
    "url": "assets/js/51.4a1935eb.js",
    "revision": "0e8294e0bb726b1ad223fe7db52536bf"
  },
  {
    "url": "assets/js/52.59bae8c0.js",
    "revision": "4a04fb8615e6037c3d673bd88f679e28"
  },
  {
    "url": "assets/js/53.3289bc0d.js",
    "revision": "0aeea8076971453591cc706ee79c59d4"
  },
  {
    "url": "assets/js/54.5b625cf5.js",
    "revision": "755744a0349aefc8e73ac392df0a1c1e"
  },
  {
    "url": "assets/js/55.d5c52031.js",
    "revision": "1b9b0fff6a50a3190ab26707517ad9c1"
  },
  {
    "url": "assets/js/56.8ac83569.js",
    "revision": "d4ebd27e72a04155c6cca0118decc901"
  },
  {
    "url": "assets/js/57.98dfda91.js",
    "revision": "bdeb35121b116669b723828698e7f024"
  },
  {
    "url": "assets/js/58.c9f51b8f.js",
    "revision": "fcec1bfb11ce1f92915f607de84e9e3d"
  },
  {
    "url": "assets/js/59.bd208f6b.js",
    "revision": "22f49311e84b91aa7648ba559cda4443"
  },
  {
    "url": "assets/js/6.6e66f51d.js",
    "revision": "20a510b138741304c94a6b078ef48943"
  },
  {
    "url": "assets/js/60.e2f9adda.js",
    "revision": "1ab69ffaeb73888e3b94fddd66b75330"
  },
  {
    "url": "assets/js/7.63807aba.js",
    "revision": "894bfe56454ce3304d28e492696b4739"
  },
  {
    "url": "assets/js/8.98289253.js",
    "revision": "a0047c4c720c4ec9144e972dbe1baa0d"
  },
  {
    "url": "assets/js/9.891bbd32.js",
    "revision": "331757ea767eca2d41b96045c38cf783"
  },
  {
    "url": "assets/js/app.68c0de7c.js",
    "revision": "306b5531ceac2d70583e292cd70b90bf"
  },
  {
    "url": "CODE_OF_CONDUCT.html",
    "revision": "fa5f82b614b61fb94ed65ed67e7d64e7"
  },
  {
    "url": "content/cloud-advocate/2019-12/deploying-java-ee-apps-to-azure-part-1.html",
    "revision": "75c32b7647d3ea0034673fd33a43c97c"
  },
  {
    "url": "content/cloud-advocate/2019-12/getting-the-latest-array-item-with-inline-script-in-logic-app.html",
    "revision": "e884e3e6e16e282f3aece2f96c33abc0"
  },
  {
    "url": "content/cloud-advocate/2019-12/Manage-multiple-Azure-tenancies-with-Azure-Lighthouse.html",
    "revision": "aadc53048c6b4a4fcac53003c99f2e9b"
  },
  {
    "url": "content/cloud-advocate/2019-12/what-i-learned-about-azure-arc-and-other-services-at-microsoft-ignite-2019.html",
    "revision": "e4545106b03a4179b85815757a5eb39a"
  },
  {
    "url": "content/cloud-advocate/2020-01/can-you-use-blazor-for-only-part-of-an-app.html",
    "revision": "a491cf8d81a72bf2f6a76a673c02d311"
  },
  {
    "url": "content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-2.html",
    "revision": "4068005be6fee37ea1bdb08b0f40b806"
  },
  {
    "url": "content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-3.html",
    "revision": "7e07423cdef8844ed612629250e9bcaa"
  },
  {
    "url": "content/cloud-advocate/2020-01/how-to-learn-microsoft-azure-in-2020.html",
    "revision": "5e2443eada7db77a4e2c78d3592730d7"
  },
  {
    "url": "content/cloud-advocate/2020-01/managing-security-with-azure-lighthouse-and-azure-arc.html",
    "revision": "97195deb564e8abd9126d67a96824a4d"
  },
  {
    "url": "content/cloud-advocate/2020-02/how-to-reduce-the-costs-of-your-azure-iaas-vms.html",
    "revision": "4461b1784d7daa6311603353e9513c4b"
  },
  {
    "url": "content/cloud-advocate/2020-02/how-to-use-github-actions-to-deploy-an-azure-virtual-machine.html",
    "revision": "b0facdc594ab726f6078054fac900da0"
  },
  {
    "url": "content/cloud-advocate/2020-02/the-best-way-to-start-with-azure-machine-learning.html",
    "revision": "25c5e1a99709ffeebfa78c2dd06a5698"
  },
  {
    "url": "content/cloud-advocate/2020-02/the-secret-art-of-debugging.html",
    "revision": "3e5e178c608c6c6dc5893eee06973e6a"
  },
  {
    "url": "content/cloud-advocate/2020-03/9-advanced-tips-for-production-machine-learning.html",
    "revision": "bf8a349307985899d326963a2ef39f0d"
  },
  {
    "url": "content/cloud-advocate/2020-03/a-modern-developer-s-workflow-for-twine.html",
    "revision": "fee2d85183a3700c41013f46617a66d3"
  },
  {
    "url": "content/cloud-advocate/2020-03/create-your-first-model-with-azure-custom-vision-and-python.html",
    "revision": "4664df3e62a9427549e71ad75bd8edd2"
  },
  {
    "url": "content/cloud-advocate/2020-03/getting-started-with-azureml-notebook-vms.html",
    "revision": "cb241285f37de02a0d2130f0bd5d0fa9"
  },
  {
    "url": "content/cloud-advocate/2020-04/creating-generative-art-using-gan-on-azureml.html",
    "revision": "9f82c516905acbbd15259a0c3de1b746"
  },
  {
    "url": "content/cloud-advocate/2020-05/build-aspnet-apps-with-dotnet-framework.html",
    "revision": "bf7f2617b5288c6bf1a9988dc386c78c"
  },
  {
    "url": "content/cloud-advocate/2020-05/build-test-and-deploy-dotnet-core-apps.html",
    "revision": "29846d7240204b2e253a897471c2f2a6"
  },
  {
    "url": "content/cloud-advocate/2020-05/great-new-features-in-c-for-a-returning-net-dev.html",
    "revision": "01ee2a9077e266b74d77541bcc69b17a"
  },
  {
    "url": "content/cloud-advocate/how-to-sync-azure-blob-storage-with-azcopy.html",
    "revision": "2f625849f1a259fc719a222ceea22659"
  },
  {
    "url": "content/index.html",
    "revision": "36dd448aba9fcdec376754083bdc4aaf"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "e5b64f1f9edfa7443b0b40376176ff98"
  },
  {
    "url": "img/azure-bit.png",
    "revision": "162128b495a62b636fb9f217ecd71785"
  },
  {
    "url": "img/logo_azure.svg",
    "revision": "ee96dfb4ed5fa38ab074f7e6257f2250"
  },
  {
    "url": "index.html",
    "revision": "74940540f3afd58935d2e8b0fc3731cc"
  },
  {
    "url": "LICENSE.html",
    "revision": "d3f27e2836b79c886ddb5f12a76fedaf"
  },
  {
    "url": "tags.html",
    "revision": "6d759bb8117bf0733b266841d597bc5b"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2019-12/deploying-java-ee-apps-to-azure-part-1.html",
    "revision": "61c6f3df55cfc674c898478ee91e2310"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2019-12/getting-the-latest-array-item-with-inline-script-in-logic-app.html",
    "revision": "6855ef2e9551cef3c0cba7548983f39a"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/can-you-use-blazor-for-only-part-of-an-app.html",
    "revision": "21ac744b00a03d4cdb25ac637d699a53"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-2.html",
    "revision": "d65429b93d3082bec59268a3325c32b2"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-3.html",
    "revision": "76456a0ceb442bc31ca0ba903ea2723a"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/how-to-learn-microsoft-azure-in-2020.html",
    "revision": "babb9680f0019679a0bf4228ca7eed76"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/managing-security-with-azure-lighthouse-and-azure-arc.html",
    "revision": "14dc9619c15588864fba7a50371f9974"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-02/how-to-reduce-the-costs-of-your-azure-iaas-vms.html",
    "revision": "f732cfffb56d531a1c97d8b492d589c3"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-02/how-to-use-github-actions-to-deploy-an-azure-virtual-machine.html",
    "revision": "960a9ca4412dde1309654920d3b75b3b"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-02/the-best-way-to-start-with-azure-machine-learning.html",
    "revision": "5b3f7b3ab07835a136597158531684c8"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-02/the-secret-art-of-debugging.html",
    "revision": "636d5c24acc649dcedba66dd6db8cb0c"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-03/a-modern-developer-s-workflow-for-twine.html",
    "revision": "b388c37f58fdff80580d60365b1f5154"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-03/create-your-first-model-with-azure-custom-vision-and-python.html",
    "revision": "c18a6da36b63eacc473b5bd56f3118ae"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-03/getting-started-with-azureml-notebook-vms.html",
    "revision": "c3441d5405a6df9e4a75a9b56288d770"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-04/creating-generative-art-using-gan-on-azureml.html",
    "revision": "a3452073a3e3e9dbbc8efc64c7dec6bd"
  },
  {
    "url": "zh-cn/content/cloud-advocate/how-to-sync-azure-blob-storage-with-azcopy.html",
    "revision": "2f7fb71f118dbd4b9e2290f0f3bbe65b"
  },
  {
    "url": "zh-cn/content/index.html",
    "revision": "cb0b03009afa9c4101a0d22282c04960"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "a94ae7160b87735811f7ec94d0aa0246"
  },
  {
    "url": "zh-cn/tags.html",
    "revision": "5e77379baac349d46f6f57bee696b5f3"
  },
  {
    "url": "zh-tw/content/cloud-advocate/2020-02/the-best-way-to-start-with-azure-machine-learning.html",
    "revision": "ff6da9a7f0a3f87dd0d2a6deae9e67f7"
  },
  {
    "url": "zh-tw/content/index.html",
    "revision": "cc8d43c4f824ca8314dc232e977bc87d"
  },
  {
    "url": "zh-tw/index.html",
    "revision": "eed6da0ec566607ef53cdcd8ecf05aed"
  },
  {
    "url": "zh-tw/tags.html",
    "revision": "87a25f66b80ed7950c07d7024992f956"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
