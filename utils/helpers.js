import defaultFallbackSVG from '../assets/defaultFallback.svg';

export function checkIsAssetValid(assetUrl = '') {
  if (!assetUrl) return defaultFallbackSVG;
  return new Promise(function (resolve) {
    const img = new Image();
    img.onerror = function () {
      resolve(defaultFallbackSVG)
    }
    img.onload = function () {
      resolve(assetUrl)
    }
    img.src = assetUrl;
  })
}