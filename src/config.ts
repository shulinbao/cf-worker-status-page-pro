import type { Config } from './types'

export const config: Config = {
  settings: {
    title: 'HorseGPT Services Status',
    url: 'https://status.nu.ac.cn',
    displayDays: 90,
    collectResponseTimes: true,
  },
  monitors: [
    {
      id: 'API Service',
      url: 'https://oneapi.nu.ac.cn',
    },
    {
      id: 'VIP Chat Service',
      url: 'https://g.nu.ac.cn',
      description: 'Built for anything connected to the Internet.',
    },
    {
      id: 'Public Chat Service',
      url: 'https://gpt.nu.ac.cn',
      name: 'The Cloudflare Blog',
      followRedirect: true,
    },
    {
      id: 'google',
      url: 'https://www.google.com/',
      name: 'Google',
      followRedirect: true,
    },
    {
      id: 'bilibili',
      url: 'https://www.bilibili.com/',
    },
    {
      id: 'GitHub',
      url: 'https://github.com/',
    },
  ],
  monitorsCsvUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSnewwW9OuXgtuutyYSfFJ_AZdI-UpkUjP2wWi-zZWM3MKa8IzBceWCe9qB_-Lmk-S7mSFgqKVnokam/pub?gid=0&single=true&output=csv',
}
