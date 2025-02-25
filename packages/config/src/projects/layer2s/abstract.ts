import { UnixTime } from '@l2beat/shared-pure'
import { upcomingL2 } from './templates/upcoming'
import { Layer2 } from './types'

export const abstract: Layer2 = upcomingL2({
  id: 'abstract',
  createdAt: new UnixTime(1724863689), // 2024-08-28T16:48:09Z
  display: {
    name: 'Abstract',
    slug: 'abstract',
    description:
      'Abstract is a Layer 2 (L2) network built on top of Ethereum, designed to securely power consumer-facing blockchain applications at scale with low fees and fast transaction speeds.',
    purposes: ['Universal'],
    category: 'Validium',
    provider: 'ZK Stack',
    links: {
      websites: ['https://abs.xyz/'],
      apps: ['https://portal.testnet.abs.xyz/bridge/'],
      documentation: ['https://docs.abs.xyz/'],
      explorers: ['https://explorer.testnet.abs.xyz/'],
      repositories: [],
      socialMedia: [
        'https://x.com/abstractchain',
        'https://discord.com/invite/abstractchain',
        'https://x.com/Abstract_Eco',
        'https://t.me/abstract_chain',
      ],
    },
  },
})
