import { defineConfig } from 'vitepress'

const siteUrl = 'https://walehub-wiki.pages.dev/'
const siteTitle = 'WaleHub Wiki | Wiki rumah kumpul Discord'
const siteDescription =
  'Rumah kumpul Discord WaleHub: panduan, gaming, dan tech dalam bahasa santai.'
const ogImage = 'https://walehub-wiki.pages.dev/images/walehub.webp'

// Discord component embed (Components V2, inline JSON < 3000 bytes).
// Bentuk mengikuti "LINK PREVIEW + Component EMBED DISCORD.md": dokumen
// JSON berisi satu parent Container di key "component".
const discordComponentEmbed = {
  component: {
    type: 17,
    accent_color: 5793266,
    components: [
      {
        type: 9,
        components: [
          {
            type: 10,
            content:
              '# WaleHub Wiki\nRumah kumpul Discord WaleHub: panduan, gaming, dan tech dalam bahasa santai.\n\n[Panduan Pemula](https://walehub-wiki.pages.dev/beginners-guide) · [Gaming](https://walehub-wiki.pages.dev/gaming) · [Tech](https://walehub-wiki.pages.dev/tech)'
          }
        ],
        accessory: {
          type: 11,
          media: { url: 'https://walehub-wiki.pages.dev/images/walehub.webp' }
        }
      },
      {
        type: 14,
        spacing: 1
      },
      {
        type: 1,
        components: [
          {
            type: 2,
            style: 5,
            label: 'Panduan Pemula',
            url: 'https://walehub-wiki.pages.dev/beginners-guide'
          },
          {
            type: 2,
            style: 5,
            label: 'Gaming',
            url: 'https://walehub-wiki.pages.dev/gaming'
          },
          {
            type: 2,
            style: 5,
            label: 'Gabung Discord',
            url: 'https://discord.gg/walehub'
          }
        ]
      }
    ]
  }
}

export default defineConfig({
  lang: 'id-ID',
  title: 'WaleHub Wiki',
  description: 'Rumah kumpul Discord WaleHub: panduan, gaming, dan tech dalam bahasa santai.',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/images/walehub.webp', type: 'image/webp' }],
    ['link', { rel: 'canonical', href: siteUrl }],
    ['meta', { name: 'description', content: siteDescription }],
    ['meta', { name: 'theme-color', content: '#5865F2' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'id_ID' }],
    ['meta', { property: 'og:site_name', content: 'WaleHub Wiki' }],
    ['meta', { property: 'og:title', content: siteTitle }],
    ['meta', { property: 'og:description', content: siteDescription }],
    ['meta', { property: 'og:url', content: siteUrl }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:image:width', content: '2048' }],
    ['meta', { property: 'og:image:height', content: '2048' }],
    ['meta', { property: 'og:image:alt', content: 'Logo WaleHub Wiki' }],
    ['meta', { property: 'og:image:type', content: 'image/webp' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: siteTitle }],
    ['meta', { name: 'twitter:description', content: siteDescription }],
    ['meta', { name: 'twitter:image', content: ogImage }],
    [
      'script',
      { id: 'discord:component-embed', type: 'application/json' },
      JSON.stringify(discordComponentEmbed)
    ]
  ],

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
