'use client'

import type { Media, User } from '@/payload-types'
import { useAuth } from '@payloadcms/ui'
import Image from 'next/image'

export default function ProfilePicture() {
  const { user } = useAuth<User>()

  return (
    <Image
      className="rounded-full w-8 h-8 object-cover"
      src={(user?.profilePicture as Media)?.url || '/fallbacks/avatar.png'}
      alt="yas"
      width={32}
      height={32}
    />
  )
}
