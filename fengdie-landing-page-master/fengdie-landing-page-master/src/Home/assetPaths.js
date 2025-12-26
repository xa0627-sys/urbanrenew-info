const getAssetBase = () => {
  if (typeof window === 'undefined') {
    return '';
  }

  const { pathname } = window.location;
  if (pathname.startsWith('/urbanrenew-info/')) {
    return '/urbanrenew-info/';
  }

  return '/';
};

export const getImagePath = (fileName) => `${getAssetBase()}assets/images/${fileName}`;
