import { name as appName, version as appVersion } from '../../package.json'

const useConsole = (TAG: string = '', options: Options = {}) => {
  const {
    onlylog = false,
    name = appName,
    version = appVersion,
    color = {
      text: 'white',
      version: '#66666666',
      log: '#0084ffff',
      warn: 'orange',
      error: 'red',
      info: 'gray',
    },
  } = options

  const bind = (t: ConsoleMethods = 'log', enable = true) => {
    const style = `font-family:sans-serif;display:inline-block;line-height:1.25;`
    const tag: any[] = [
      `%c  ${name}  %c  ${version}  `,
      `${style}border-radius:1em 0 0 1em;background:${
        color[t ?? 'primary']
      };color:${color.text};`,
      `${style}border-radius:0 1em 1em 0;background:${color.version};color:${color.text};`,
    ]

    // return enable ? console[t].bind(window.console, ...tag) : () => void 0
    return enable
      ? console[onlylog ? 'log' : t].bind(window.console, ...tag, TAG && `${TAG}:`)
      : () => void 0
  }

  return {
    log: bind('log', process.env.NODE_ENV === 'development'),
    warn: bind('warn'),
    error: bind('error'),
    info: bind('info'),
  }
}

export default useConsole

type Options = {
  onlylog?: boolean
  name?: string
  version?: string
  color?: {
    text?: string
    version?: string
  } & Record<ConsoleMethods, string>
}

type ConsoleMethods = 'log' | 'warn' | 'error' | 'info'
