export const textEllipsis = (str, count = 150) =>
  str?.length > count ? str?.slice(0, count) + "..." : str;
