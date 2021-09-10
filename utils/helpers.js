import defaultFallback from '../assets/defaultFallback.jpg';

export function checkIsAssetValid(assetUrl = '') {
  if (!assetUrl) return defaultFallback;
  return new Promise(function (resolve) {
    const img = new Image();
    img.onerror = function () {
      resolve(defaultFallback)
    }
    img.onload = function () {
      resolve(assetUrl)
    }
    img.src = assetUrl;
  })
}