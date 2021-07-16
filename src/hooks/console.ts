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
    const style = `
      font-family: sans-serif;
      color: ${color.text};
      display: inline-block;
      line-height: 1.35;
    `
    const tag: any[] = [
      `%c ${name} %c ${version}`,
      `${style}
        padding: 4px 4px 4px 8px;
        border-radius: 2.6em 0 0 1.5em;
        background: ${color[t ?? 'primary']};
      `,
      `${style}
        padding: 4px 12px 4px 4px;
        border-radius: 0 1.2em 2em 0;
        background: ${color.version};
      `,
    ]

    return enable
      ? console[onlylog ? 'log' : t].bind(
          window.console,
          ...tag,
          TAG && `${TAG}:`.toUpperCase(),
        )
      : () => void 0
  }

  return {
    log: bind('log', import.meta.env.DEV),
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
