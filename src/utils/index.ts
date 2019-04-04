/* tslint:disable:no-magic-numbers */
import { Readable } from 'stream'
import ScorocodeError from './ScorocodeError'

const utils = {
  /**
   * Throw the Scorocode error
   * @param {string} code
   * @param {string} message
   */
  throwError(code: string, message: string): void {
    throw new ScorocodeError(code, message)
  },

  setReadonlyProperties(obj: object, props: string[]): void {
    if (!props) {
      return
    }

    for (const key in props) {
      if (props.hasOwnProperty(key)) {
        Object.defineProperty(obj, key, {
          configurable: true,
          enumerable: true,
          value: props[key],
        })
      }
    }
  },

  setProperties(
    obj: object,
    props: object,
    readOnlyProps: string[] = []
  ): void {
    for (const key in props) {
      if (props.hasOwnProperty(key)) {
        if (readOnlyProps.indexOf(key) !== -1) {
          Object.defineProperty(obj, key, {
            configurable: true,
            enumerable: true,
            value: props[key],
          })
        } else {
          obj[key] = props[key]
        }
      }
    }
  },

  streamToString(stream: Readable): Promise<string> {
    return new Promise((res, rej) => {
      const chunks: string[] = []

      stream.on('data', (chunk) => {
        chunks.push(chunk.toString())
      })
      stream.on('end', () => {
        res(chunks.join(''))
      })
      stream.on('error', (err) => {
        rej(err)
      })
    })
  },

  streamToUint8Array(stream: Readable): Promise<Uint8Array> {
    return new Promise((res, rej) => {
      const chunks: Buffer[] = []

      stream.on('data', (chunk) => {
        chunks.push(chunk as Buffer)
      })
      stream.on('end', () => {
        res(Uint8Array.from(Buffer.concat(chunks)))
      })
      stream.on('error', (err) => {
        rej(err)
      })
    })
  },

  stringToUint8Array(str: string): Uint8Array {
    return Uint8Array.from(Buffer.from(str))
  },

  uint8ArrayToString(arr: Uint8Array): string {
    const buffer = Buffer.from(arr)

    return buffer.toString()
  },
}

export default utils
