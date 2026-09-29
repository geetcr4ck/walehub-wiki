import { defineConfig } from 'vitepress'

const siteUrl = 'https://walehub-wiki.pages.dev/'
const siteTitle = 'Walehub Wiki | Wiki rumah kumpul Discord'
const siteDescription =
  'Panduan dan tautan yang dikumpulkan jadi satu, dikurasi bersama member server Walehub. Terbuka untuk kontribusi dan umpan balik.'
const ogImage = 'https://walehub-wiki.pages.dev/images/walehub.webp'

// Discord component embed (Components V2, inline JSON < 3000 bytes).
// Bentuk mengikuti "LINK PREVIEW + Component EMBED DISCORD.md": dokumen
// JSON berisi satu parent Container di key "component".
const discordComponentEmbed = {
  component: {
    type: 17,
    accent_color: 15844367,
    components: [
      {
        type: 9,
        components: [
          {
            type: 10,
            content:
              '# Walehub Wiki\nPanduan dan tautan yang dikumpulkan jadi satu, dikurasi bersama member server Walehub. Terbuka untuk kontribusi dan umpan balik.'
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
            label: 'Buka Wiki',
            url: 'https://walehub-wiki.pages.dev'
          },
          {
            type: 2,
            style: 5,
            label: 'Berkontribusi',
            url: 'https://github.com/geetcr4ck/walehub-wiki/blob/main/CONTRIBUTING.md'
          },
          {
            type: 2,
            style: 5,
            label: 'Discord',
            url: 'https://dsc.gg/walehub'
          }
        ]
      }
    ]
  }
}

export default defineConfig({
  lang: 'id-ID',
  title: 'Walehub Wiki',
  description: 'Panduan dan tautan yang dikumpulkan jadi satu, dikurasi bersama member server Walehub. Terbuka untuk kontribusi dan umpan balik.',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/images/walehub.webp', type: 'image/webp' }],
    ['link', { rel: 'canonical', href: siteUrl }],
    ['meta', { name: 'description', content: siteDescription }],
    ['meta', { name: 'theme-color', content: '#f1c40f' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'id_ID' }],
    ['meta', { property: 'og:site_name', content: 'Walehub Wiki' }],
    ['meta', { property: 'og:title', content: siteTitle }],
    ['meta', { property: 'og:description', content: siteDescription }],
    ['meta', { property: 'og:url', content: siteUrl }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:image:width', content: '2048' }],
    ['meta', { property: 'og:image:height', content: '2048' }],
    ['meta', { property: 'og:image:alt', content: 'Logo Walehub Wiki' }],
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
    siteTitle: 'Walehub Wiki',
    logo: '/images/walehub.webp',

    nav: [
      { text: 'Beranda', link: '/' },
      { text: 'Panduan Pemula', link: '/beginners-guide' },
      { text: 'Gaming', link: '/gaming' },
      { text: 'Tech', link: '/tech' },
      { text: 'Tools', link: '/tools' },
      { text: 'AI', link: '/ai' }
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
          { text: 'Tools', link: '/tools' },
          { text: 'AI', link: '/ai' }
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
      message: 'Walehub Wiki: wale berarti rumah, hub berarti tempat kumpul.',
      copyright: 'Konten komunitas Walehub, bebas dibaca dan diperbaiki.'
    }
  }
})
