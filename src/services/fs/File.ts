import { Readable } from 'stream'
import Application from '../../Application'

export default class File {
  private _path: string
  private _content?: Buffer

  constructor(public readonly app: Application, path: string) {
    this._path = path
  }

  get path(): string {
    return this._path
  }

  get content(): Buffer | void {
    return this._content
  }

  rename(newPath: string): Promise<this> {
    return this.app
      .client()
      .fs.fileRename({
        newPath,
        path: this.path,
      })
      .then(() => {
        this._path = newPath

        return Promise.resolve(this)
      })
  }

  delete(): Promise<this> {
    return this.app
      .client()
      .fs.fileDelete({
        path: this.path,
      })
      .then(() => {
        this._content = undefined

        return Promise.resolve(this)
      })
  }

  sync(): Promise<this> {
    return this.app
      .client()
      .fs.fileDownload({
        path: this.path,
      })
      .then((content) => {
        this._content = content

        return Promise.resolve(this)
      })
  }

  upload(content: Uint8Array | Readable | string): Promise<this> {
    return this.app
      .client()
      .fs.fileUpload({
        path: this.path,
        body: content,
      })
      .then(() => {
        // this._content = content

        return Promise.resolve(this)
      })
  }
}
