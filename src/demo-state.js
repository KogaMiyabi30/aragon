import { addMinutes, addHours, addDays } from 'date-fns'

export const notifications = [
  {
    title: 'Voting (XVT)',
    description: 'New voting was created. You can now vote.',
    date: addMinutes(new Date(), -10),
    unread: true,
  },
  {
    title: 'Tokens (XVT)',
    description: 'You have received 100 XVT.',
    date: addMinutes(new Date(), -25),
    unread: true,
  },
  {
    title: 'Fundraising (ANT)',
    description: 'New public fundraising started, cap is 192.5 ETH.',
    date: addHours(new Date(), -1),
    unread: false,
  },
  {
    title: 'Tokens (XVT)',
    description: 'You have received 100 XVT.',
    date: addHours(new Date(), -3),
    unread: false,
  },
  {
    title: 'Tokens (XVT)',
    description: 'You have received 100 XVT.',
    date: addDays(new Date(), -1),
    unread: false,
  },
  {
    title: 'Fundraising (ANT)',
    description: 'New public fundraising started, cap is 192.5 ETH.',
    date: addDays(new Date(), -2),
    unread: false,
  },
  {
    title: 'Tokens (XVT)',
    description: 'You have received 100 XVT.',
    date: addDays(new Date(), -3),
    unread: false,
  },
  {
    title: 'Tokens (XVT)',
    description: 'You have received 100 XVT.',
    date: addDays(new Date(), -3),
    unread: false,
  },
]

export const apps = [
  {
    id: 'tokens',
    name: 'Tokens',
    instances: [{ id: 'ant', name: 'ANT' }, { id: 'token', name: 'TOKEN' }],
    src: 'apps/demo',
  },
  {
    id: 'voting',
    name: 'Voting',
    instances: [{ id: 'ant', name: 'ANT' }],
    src: 'apps/demo',
  },
  {
    id: 'groups',
    name: 'Groups',
    instances: [
      { id: 'core', name: 'Core Devs' },
      { id: 'community', name: 'Community Devs' },
    ],
    src: 'apps/demo',
  },
  { id: 'finance', name: 'Finance', src: 'apps/demo' },
  {
    id: 'fundraising',
    name: 'Fundraising',
    instances: [{ id: 'ant', name: 'ANT' }],
    src: 'apps/demo',
  },
  { id: 'permissions', name: 'Permissions' },
  { id: 'identity', name: 'Identity', src: 'apps/demo' },
]

export const tokens = [
  { symbol: 'XVT', name: 'Voting Token', amount: '100097995', value: 70 },
  { symbol: 'LIS', name: 'Lorem Ipsum Token', amount: '10002', value: 30 },
]

export const prices = [
  { symbol: 'ETH', value: '$302,91', status: 'up' },
  { symbol: 'ANT', value: '$2.39', status: 'down' },
  { symbol: 'DNT', value: '$0.35', status: 'down' },
]

export const homeActions = [
  { id: 'transfer-tokens', label: 'Transfer Tokens', app: 'tokens' },
  { id: 'assign-tokens', label: 'Assign Tokens', app: 'tokens' },
  { id: 'vote', label: 'Vote', app: 'voting' },
  { id: 'view-groups', label: 'View Groups', app: 'groups' },
  { id: 'check-finance', label: 'Check Finance', app: 'finance' },
  { id: 'new-payment', label: 'New Payment', app: 'tokens' },
]

export const appStates = {
  settings: {
    network: 'Kovan',
    networkName: 'Kovan testnet',
    organizationAddress: '0x3f5ce5fbfe3e9af3971dd833d26ba9b5c936f0be',
    currencies: ['USD', 'EUR', 'GBP', 'CAD', 'RMB', 'JPY'],
    selectedCurrency: 'EUR',
  },
}
