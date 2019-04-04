import Application from '../../Application'
import { IFileInfo } from '../client/FsService'

export default class Folder {
  private _path: string
  private _files?: IFileInfo[]

  constructor(public readonly app: Application, path: string) {
    this._path = path
  }

  get path(): string {
    return this._path
  }

  get files(): IFileInfo[] | void {
    return this._files
  }

  rename(newPath: string): Promise<this> {
    return this.app
      .client()
      .fs.folderRename({
        newPath,
        path: this.path,
      })
      .then(() => {
        this._path = newPath

        return Promise.resolve(this)
      })
  }

  create(): Promise<this> {
    return this.app
      .client()
      .fs.folderCreate({
        path: this.path,
      })
      .then(() => {
        this._files = []

        return Promise.resolve(this)
      })
  }

  delete(): Promise<this> {
    return this.app
      .client()
      .fs.folderDelete({
        path: this.path,
      })
      .then(() => {
        this._files = undefined

        return Promise.resolve(this)
      })
  }

  sync(): Promise<this> {
    return this.app
      .client()
      .fs.folderRead({
        path: this.path,
      })
      .then((folder) => {
        this._files = folder.files

        return Promise.resolve(this)
      })
  }
}
