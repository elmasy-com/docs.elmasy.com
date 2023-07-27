// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Elmasy Docs',
  tagline: 'Elmasy documentation and knowledge base.',
  favicon: '/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.elmasy.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'elmasy-com', // Usually your GitHub org/user name.
  projectName: 'docs.elmasy.com', // Usually your repo name.

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
            'https://github.com/elmasy-com/docs.elmasy.com/tree/main/',
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
    // docs: {
    //   sidebar: {
    //     autoCollapseCategories: true,
    //   },
    // },
    // announcementBar: {
    //   id: 'support_us',
    //   content:
    //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //   backgroundColor: '#fafbfc',
    //   textColor: '#091E42',
    //   isCloseable: false,
    // },
    // Replace with your project's social card
    image: 'logo.png',
    navbar: {
      title: 'Elmasy Docs',
      logo: {
        alt: 'Elmasy logo',
        src: '/logo_white.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
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
          title: 'Modules',
          items: [
            {
              label: 'Columbus Project',
              to: 'https://columbus.elmasy.com',
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
              label: 'Swagger-UI',
              href: 'https://swagger-ui.elmasy.com',
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
    { src: '/js/script.js', defer: true, 'data-domain': 'docs.elmasy.com' } // Plausible
  ],
};

module.exports = config;
