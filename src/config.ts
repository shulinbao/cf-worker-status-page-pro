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
      description: 'This is a one-stop API service provided by the HorseGPT project.',
    },
    {
      id: 'internal',
      url: 'https://chat.nu.ac.cn',
      name: 'Internal Chat Service',
      description: 'This is the server that HorseGPT provides for testing services for internal developers.',
    },
    {
      id: 'public',
      url: 'https://chat.nu.ac.cn',
      name: 'Public Chat Service',
      description: 'This is the server that the HorseGPT project provides for limited chat services to the public.',
      followRedirect: true,
    },
  ],
  monitorsCsvUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT4DpeTA62A4p9S1QFcCqmMsHi5FImOMMxy6JFnemTEh56-HdYoGdG3ENoVBgxBd0t8DYbbEAXX5Wf9/pub?gid=0&single=true&output=csv',
}
