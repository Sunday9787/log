import log from '../src/main'

describe('log', () => {
  describe('log type', () => {
    it('env', () => {
      expect(log('develop', 'env')).toBe(undefined)
    })

    it('platform', () => {
      expect(log('win32', 'platform')).toBe(undefined)
    })

    it('version', () => {
      expect(log('1.0.1', 'version')).toBe(undefined)
    })

    it('build', () => {
      expect(log('1.0.1', 'build')).toBe(undefined)
    })

    it('build', () => {
      expect(log('1.0.1', 'build')).toBe(undefined)
    })

    it('build', () => {
      expect(log('1.0.2', 'build', ['red', 'blue'])).toBe(undefined)
    })
  })

  describe('log option', () => {
    it('option', () => {
      expect(log({ label: '666', message: 'ok' }, ['red', 'blue'])).toBe(undefined)
    })
  })
})
