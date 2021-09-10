import handleImageError from "./utils/handleImageError.js";

export const vImgError = {
  bind: handleImageError,
  componentUpdated: handleImageError,
};

export default {
  install(Vue, options) {
    Vue.directive("imgError", vImgError);
  }
};
