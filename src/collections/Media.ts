import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',

  labels: {
    singular: {
      en: 'Media File',
      pl: 'Plik Multimedialny',
    },
    plural: {
      en: 'Media Files',
      pl: 'Pliki Multimedialne',
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: {
        en: 'Alternative Text',
        pl: 'Tekst alternatywny',
      },
    },
  ],
  upload: true,
}
