type LogColor = [string, string]

type LogType = 'env' | 'build' | 'version' | 'platform'

interface LogOption {
  label: string
  message: string | undefined
}

declare function log(message: LogOption, color: LogColor): void
declare function log(message: string | undefined, type: LogType): void
declare function log(message: string | undefined, type: LogType, color?: LogColor): void

export default log
