module.exports = {
  siteUrl: `https://blog.zack.computer`, // Site domain. Do not include a trailing slash!

  postsPerPage: 12, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)

  // siteTitleMeta: `It's Zack's Blog`, // This allows an alternative site title for meta data for pages.
  // siteDescriptionMeta: `The thoughts of Zack Sheppard`, // This allows an alternative site description for meta data for pages.

  shareImage: `/images/default-share.jpg`, // fallback image for meta data. Will be used, when no post/tag/author image specified. 1200x1200 is recommended
  shareImageWidth: 1200, // Change to the width of your default share image
  shareImageHeight: 1200, // Change to the height of your default share image

  shortTitle: `Code and Cocktails`, // Used for App manifest e.g. Mobile Home Screen
  siteIcon: `favicon.png`, // Logo in /static dir used for SEO, RSS, and App manifest
  backgroundColor: `#021114`, // Used for Offline Manifest
  themeColor: `#FEFEFE` // Used for Offline Manifest
};
