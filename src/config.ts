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
      id: 'api',
      url: 'https://oneapi.nu.ac.cn',
      name: 'API Service',
    },
    {
      id: 'internal',
      url: 'https://g.nu.ac.cn',
      name: 'Internal Chat Service',
      description: 'Built for anything connected to the Internet.',
    },
    {
      id: 'public',
      url: 'https://gpt.nu.ac.cn',
      name: 'Public Chat Service',
      followRedirect: true,
    },
  ],
  monitorsCsvUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSnewwW9OuXgtuutyYSfFJ_AZdI-UpkUjP2wWi-zZWM3MKa8IzBceWCe9qB_-Lmk-S7mSFgqKVnokam/pub?gid=0&single=true&output=csv',
}
