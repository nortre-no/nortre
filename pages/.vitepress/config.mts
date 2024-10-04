import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NORTRE",
  description: "Norwegian Trusted Research Environments (NORTRE)",
  lang: "en-US",
  base: "",
  outDir: "../build",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/nortre-logo.png',
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Perspectives', link: '/perspectives/' },
      { text: 'About', link: '/about/' },
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   link: '/examples/',  // index.md
      //   items: [
      //     { text: 'A Examples', link: '/examples/a-examples' },
      //     { text: 'B Examples', link: '/examples/b-examples' },
      //   ]
      // },
      {
        text: 'Perspectives',
        link: '/perspectives/',
      },
      {
        text: 'Contact',
        link: '/contact/',
      },
      {
        text: 'About',
        link: '/about/',  // index.md
        // items: [
        //   { text: 'Team', link: '/about/team' },
        // ]
      },
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/nortre-no/' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/nortre/' },
    ],
  },
})
