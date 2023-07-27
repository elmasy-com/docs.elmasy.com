// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Elmasy Wiki',
  tagline: 'Elmasy documentation and knowledge base.',
  favicon: '/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.elmasy.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'elmasy-com', // Usually your GitHub org/user name.
  projectName: 'wiki.elmasy.com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          routeBasePath: '/', // Docs-only mode: https://docusaurus.io/docs/docs-introduction#docs-only-mode
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/elmasy-com/wiki.elmasy.com/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    // Replace with your project's social card
    image: 'logo.png',
    navbar: {
      title: 'Elmasy Wiki',
      logo: {
        alt: 'Elmasy logo',
        src: '/logo_white.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        { to: '/', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/elmasy-com',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/elmasy-com/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/elmasy_com',
            },
            {
              label: 'Mastodon',
              href: 'https://infosec.exchange/@elmasy',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Elmasy.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },

  scripts: [
    { src: '/js/script.js', defer: true, 'data-domain': 'wiki.elmasy.com' } // Plausible
  ],
};

module.exports = config;
