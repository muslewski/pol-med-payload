import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: {
      en: 'User',
      pl: 'Użytkownik',
    },
    plural: {
      en: 'Users',
      pl: 'Użytkownicy',
    },
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    {
      name: 'firstName',
      type: 'text',
      required: true,
      label: {
        en: 'First Name',
        pl: 'Imię',
      },
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
      label: {
        en: 'Last Name',
        pl: 'Nazwisko',
      },
    },
    {
      displayPreview: true,
      name: 'profilePicture',
      type: 'upload',
      relationTo: 'media',
      label: {
        en: 'Profile Picture',
        pl: 'Zdjęcie profilowe',
      },
    },
  ],
}
