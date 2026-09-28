import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'id-ID',
  title: 'WaleHub Wiki',
  description: 'Rumah kumpul Discord WaleHub: panduan, gaming, dan tech dalam bahasa santai.',
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/images/walehub.webp', type: 'image/webp' }]],

  themeConfig: {
    siteTitle: 'WaleHub Wiki',
    logo: '/images/walehub.webp',

    nav: [
      { text: 'Beranda', link: '/' },
      { text: 'Panduan Pemula', link: '/beginners-guide' },
      { text: 'Gaming', link: '/gaming' },
      { text: 'Tech', link: '/tech' },
      { text: 'Tools', link: '/tools' }
    ],

    sidebar: [
      {
        text: 'Mulai di sini',
        items: [
          { text: 'Beranda', link: '/' },
          { text: 'Panduan Pemula', link: '/beginners-guide' }
        ]
      },
      {
        text: 'Kumpul',
        items: [
          { text: 'Gaming', link: '/gaming' },
          { text: 'Tech', link: '/tech' },
          { text: 'Tools', link: '/tools' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/geetcr4ck/walehub-wiki/edit/main/docs/:path',
      text: 'Ubah halaman ini di GitHub'
    },

    lastUpdated: {
      text: 'Terakhir diubah'
    },

    docFooter: {
      prev: 'Halaman sebelumnya',
      next: 'Halaman berikutnya'
    },

    outline: {
      label: 'Di halaman ini'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/geetcr4ck/walehub-wiki' },
      { icon: 'discord', link: 'https://discord.gg/walehub' }
    ],

    footer: {
      message: 'WaleHub Wiki: wale berarti rumah, hub berarti tempat kumpul.',
      copyright: 'Konten komunitas WaleHub, bebas dibaca dan diperbaiki.'
    }
  }
})
