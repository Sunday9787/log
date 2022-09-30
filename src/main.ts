type LogColor = [string, string]

type LogType = 'env' | 'build' | 'version' | 'platform'

interface LogOption {
  label: string
  message: string | undefined
}

function style([a, b]: LogColor) {
  return [
    `background-color: ${a}; padding: 0 5px; border-radius: 2px 0 0 2px; line-height: 1.5; color: #fff;`,
    `background-color: ${b}; padding: 0 5px; border-radius: 0 2px 2px 0; line-height: 1.5; color: #fff;`
  ]
}

const handle: Record<LogType, (message: string | undefined, color?: LogColor) => void> = {
  env(message, color = ['#585858', '#49c31b']) {
    console.info.apply(null, [`%cEnvironment%c${message}`].concat(style(color)))
  },
  build(message, color = ['#585858', '#1475b2']) {
    console.info.apply(null, [`%cBuild Date%c${message}`].concat(style(color)))
  },
  version(message, color = ['#585858', '#1475b2']) {
    console.info.apply(null, [`%cVersion%c${message}`].concat(style(color)))
  },
  platform(message, color = ['#585858', '#1475b2']) {
    console.info.apply(null, [`%cPlatform%c${message}`].concat(style(color)))
  }
}

/**
 * 美化log
 * @param message
 * @param type 类型
 * @param color 颜色
 */
function log(message: LogOption, color: LogColor): void
function log(message: string | undefined, type: LogType): void
function log(message: string | undefined, type: LogType, color?: LogColor): void
function log(...arg: [string | undefined | LogOption, LogType | LogColor, LogColor?]): void {
  if (typeof arg[0] === 'object') {
    console.info.apply(null, [`%c${arg[0].label}%c${arg[0].message}`].concat(style(arg[1] as LogColor)))
    return
  }

  handle[arg[1] as LogType].apply(null, [arg[0] as string | undefined, arg[2]])
}

export default log
