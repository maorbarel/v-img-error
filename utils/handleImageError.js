import { checkIsAssetValid } from "./helpers.js";

export default async function handleImageError(el, binding) {
  const fallbackImg = await checkIsAssetValid(binding?.value)
  if (el?.src) {
    el.addEventListener('error', (ev) => {
      ev.target.src = fallbackImg;
    }, { once: true });
  } else {
    el.src = fallbackImg;
  }
}