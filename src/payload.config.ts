// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { en } from '@payloadcms/translations/languages/en'
import { pl } from '@payloadcms/translations/languages/pl'
import { resendAdapter } from '@payloadcms/email-resend'

import { Users } from './collections/Users'
import { Media } from './collections/Media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    // Avatar component for the admin UI
    avatar: { Component: './components/admin/profile-picture.tsx' },
    // Add your own logo and icon here
    components: {
      graphics: {
        Icon: './components/admin/Icon/index.tsx#Icon',
        Logo: './components/admin/Logo/index.tsx#Logo',
      },
    },
    // Add your own meta data here
    meta: {
      description: 'This is a custom meta description',
      icons: [
        {
          type: 'image/png',
          rel: 'icon',
          url: '/favicon.svg',
        },
      ],
      openGraph: {
        description: 'This is a custom OG description',
        images: [
          {
            height: 600,
            url: '/ogImage.png',
            width: 800,
          },
        ],
        title: 'This is a custom OG title',
      },
      titleSuffix: '- Your App Name',
    },
  },
  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
  i18n: {
    supportedLanguages: { en, pl },
  },
  email: resendAdapter({
    defaultFromAddress: 'dev@bdglab.com',
    defaultFromName: 'Pol-Med App',
    apiKey: process.env.RESEND_API_KEY || '',
  }),
})
