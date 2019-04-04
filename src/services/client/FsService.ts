import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'
import { Readable } from 'stream'
import utils from '../../utils'
import BaseService from './BaseService'
import { FileApiClient } from './grpc/sc_file_api/file_api_grpc_pb'
import * as fsObjects from './grpc/sc_file_api/file_api_pb'

interface ISelectRequest {
  path: string
}

interface IRenameRequest {
  path: string
  newPath: string
}

export interface IFileInfo {
  path: string
  isDir: boolean
}

export interface IFolderInfo {
  path: string
  files: IFileInfo[]
}

interface IUploadRequest {
  body: Uint8Array | Readable | string
  path: string
}

const createFileInfo = (data: fsObjects.FileInfo): IFileInfo => ({
  path: data.getPath(),
  isDir: data.getIsDir(),
})

const createFolderInfo = (data: fsObjects.FolderInfo): IFolderInfo => ({
  path: data.getPath(),
  files: data.getFilesInfoList().map(createFileInfo),
})

export default class FsService extends BaseService<FileApiClient> {
  folderCreate(
    payload: ISelectRequest
  ): Promise<google_protobuf_empty_pb.Empty> {
    const req = new fsObjects.SelectRequest()
    req.setPath(payload.path)

    return this.makeCall<
      fsObjects.SelectRequest,
      google_protobuf_empty_pb.Empty
    >('folderCreate', req)
  }

  folderDelete(
    payload: ISelectRequest
  ): Promise<google_protobuf_empty_pb.Empty> {
    const req = new fsObjects.SelectRequest()
    req.setPath(payload.path)

    return this.makeCall<
      fsObjects.SelectRequest,
      google_protobuf_empty_pb.Empty
    >('folderDelete', req)
  }

  folderRename(
    payload: IRenameRequest
  ): Promise<google_protobuf_empty_pb.Empty> {
    const req = new fsObjects.RenameRequest()
    req.setPath(payload.path)
    req.setNewPath(payload.newPath)

    return this.makeCall<
      fsObjects.RenameRequest,
      google_protobuf_empty_pb.Empty
    >('folderRename', req)
  }

  folderRead(payload: ISelectRequest): Promise<IFolderInfo> {
    const req = new fsObjects.SelectRequest()
    req.setPath(payload.path)

    return this.makeCall<fsObjects.SelectRequest, fsObjects.FolderInfo>(
      'folderRead',
      req
    ).then(createFolderInfo)
  }

  fileUpload(payload: IUploadRequest): Promise<google_protobuf_empty_pb.Empty> {
    const reqPath = new fsObjects.UploadRequest()
    reqPath.setPath(payload.path)

    return this.makeWritableCall<
      fsObjects.UploadRequest,
      google_protobuf_empty_pb.Empty
    >('fileUpload', (stream) => {
      stream.write(reqPath, {}, () => {
        if (typeof payload.body === 'string') {
          const reqBody = new fsObjects.UploadRequest()
          reqBody.setBody(Buffer.from(payload.body))

          stream.write(reqBody, {}, () => stream.end())
        } else if (Buffer.isBuffer(payload.body)) {
          const reqBody = new fsObjects.UploadRequest()
          reqBody.setBody(payload.body)

          stream.write(reqBody, {}, () => stream.end())
        } else if (payload.body instanceof Readable) {
          const bodyStream: Readable = payload.body

          bodyStream.on('data', (data: string) => {
            const reqBody = new fsObjects.UploadRequest()
            reqBody.setBody(Buffer.from(data))

            stream.write(reqBody)
          })

          bodyStream.on('end', () => {
            stream.end()
          })
        } else {
          utils.throwError(
            'FsService::fileUpload',
            'Bad request - the payload.body type should be one of string, array or stream'
          )
        }
      })
    })
  }

  fileDownload(payload: ISelectRequest): Promise<Buffer> {
    const req = new fsObjects.SelectRequest()
    req.setPath(payload.path)

    return this.makeReadableCall<fsObjects.SelectRequest, fsObjects.File>(
      'fileDownload',
      req
    ).then(
      // (chunks) => chunks.reduce((result, chunk) => result + chunk.getBody().toString(), '')
      (chunks) => Buffer.concat(chunks.map((chunk) => chunk.getBody_asU8()))
    )
  }

  fileRename(payload: IRenameRequest): Promise<google_protobuf_empty_pb.Empty> {
    const req = new fsObjects.RenameRequest()
    req.setPath(payload.path)
    req.setNewPath(payload.newPath)

    return this.makeCall<
      fsObjects.RenameRequest,
      google_protobuf_empty_pb.Empty
    >('fileRename', req)
  }

  fileDelete(payload: ISelectRequest): Promise<google_protobuf_empty_pb.Empty> {
    const req = new fsObjects.SelectRequest()
    req.setPath(payload.path)

    return this.makeCall<
      fsObjects.SelectRequest,
      google_protobuf_empty_pb.Empty
    >('fileDelete', req)
  }

  protected getClientConstructor() {
    return FileApiClient
  }
}
