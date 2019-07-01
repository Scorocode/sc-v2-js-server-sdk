import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'
import BaseService from './BaseService'
import { ManagerClient } from './grpc/sc_broker_node_api/manager_grpc_pb'
import * as mngObjects from './grpc/sc_broker_node_api/manager_pb'

export interface IEmptyResponse {}

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

const createFileInfo = (data: mngObjects.FileInfo): IFileInfo => ({
  path: data.getPath(),
  isDir: data.getIsDir(),
})

export interface IFolderInfo {
  path: string
  files: IFileInfo[]
}

const createFolderInfo = (data: mngObjects.FolderInfo): IFolderInfo => ({
  path: data.getPath(),
  files: data.getFilesInfoList().map(createFileInfo),
})

export interface IScript {
  path: string
  code: string
}

const createScript = (data: mngObjects.Script): IScript => ({
  path: data.getPath(),
  code: data.getCode(),
})

interface ITimerRepeat {
  custom?: ITimerRepeatCustom
  daily?: ITimerRepeatDaily
  monthly?: ITimerRepeatMonthly
}

const createTimerRepeat = (data: mngObjects.Timer.Repeat): ITimerRepeat => {
  const custom = data.getCustom()
  const daily = data.getDaily()
  const monthly = data.getMonthly()

  const res: ITimerRepeat = {}

  if (custom) {
    res.custom = {
      minutes: custom.getMinutes(),
    }
  } else if (daily) {
    res.daily = {
      minutes: daily.getMinutes(),
      days: daily.getDaysList(),
    }
  } else if (monthly) {
    res.monthly = {
      minutes: monthly.getMinutes(),
      lastDate: monthly.getLastDate(),
      days: monthly.getDaysList(),
      months: monthly.getMonthsList(),
    }
  }

  return res
}

interface ITimerRepeatCustom {
  minutes: number
}

interface ITimerRepeatDaily extends ITimerRepeatCustom {
  days: number[]
}

interface ITimerRepeatMonthly extends ITimerRepeatDaily {
  months: number[]
  lastDate: boolean
}

interface ITimer {
  type: mngObjects.Timer.Type
  active: boolean
  start: number
  next: number
  repeat?: ITimerRepeat
}

const createTimer = (data: mngObjects.Timer): ITimer => {
  const res: ITimer = {
    type: data.getType(),
    active: data.getActive(),
    start: data.getStart(),
    next: data.getNext(),
  }

  const repeat = data.getRepeat()
  if (repeat) {
    res.repeat = createTimerRepeat(repeat)
  }

  return res
}

export interface ICron {
  path: string
  timer?: ITimer
}

const createCron = (data: mngObjects.CronItem): ICron => {
  const res: ICron = {
    path: data.getPath(),
  }

  const timer = data.getTimer()
  if (timer) {
    res.timer = createTimer(timer)
  }

  return res
}

export interface ICronRules {
  rules: ICron[]
}

const createCronRules = (data: mngObjects.Cron): ICronRules => ({
  rules: data.getRulesList().map(createCron),
})

export interface IReplica {
  id: string
  appName: string
  version: string
  goVersion: string
  buildDate: string
  commit: string
}

export interface IProcessInfo {
  replica: string
  pid: number
  path: string
  createdAt: number // why number?
  memory: number
  cpu: number
  state: mngObjects.ProcessInfo.State
  type: mngObjects.ProcessInfo.Type
}

const createProcessInfo = (data: mngObjects.ProcessInfo): IProcessInfo => ({
  replica: data.getReplica(),
  pid: data.getPid(),
  path: data.getPath(),
  createdAt: data.getCreatedAt(),
  memory: data.getMemory(),
  cpu: data.getCpu(),
  state: data.getState(),
  type: data.getType(),
})

interface ISelectProcess {
  replica: string
  pid: number
}

export default class BrokerService extends BaseService<ManagerClient> {
  // FOLDER
  folderCreate(payload: ISelectRequest): Promise<IEmptyResponse> {
    const req = new mngObjects.SelectRequest()
    req.setPath(payload.path)

    return this.makeCall<
      mngObjects.SelectRequest,
      google_protobuf_empty_pb.Empty
    >('folderCreate', req)
  }

  folderDelete(payload: ISelectRequest): Promise<IEmptyResponse> {
    const req = new mngObjects.SelectRequest()
    req.setPath(payload.path)

    return this.makeCall<
      mngObjects.SelectRequest,
      google_protobuf_empty_pb.Empty
    >('folderDelete', req)
  }

  folderRename(payload: IRenameRequest): Promise<IEmptyResponse> {
    const req = new mngObjects.RenameRequest()
    req.setPath(payload.path)
    req.setNewPath(payload.newPath)

    return this.makeCall<
      mngObjects.RenameRequest,
      google_protobuf_empty_pb.Empty
    >('folderRename', req)
  }

  folderRead(payload: ISelectRequest): Promise<IFolderInfo> {
    const req = new mngObjects.SelectRequest()
    req.setPath(payload.path)

    return this.makeCall<mngObjects.SelectRequest, mngObjects.FolderInfo>(
      'folderRead',
      req
    ).then(createFolderInfo)
  }

  // SCRIPT
  scriptCreate(payload: ISelectRequest): Promise<IScript> {
    const req = new mngObjects.SelectRequest()
    req.setPath(payload.path)

    return this.makeCall<mngObjects.SelectRequest, mngObjects.Script>(
      'scriptCreate',
      req
    ).then(createScript)
  }

  scriptUpdate(payload: IScript): Promise<IEmptyResponse> {
    const req = new mngObjects.Script()
    req.setPath(payload.path)
    req.setCode(payload.code)

    return this.makeCall<mngObjects.Script, google_protobuf_empty_pb.Empty>(
      'scriptUpdate',
      req
    )
  }

  scriptDelete(payload: ISelectRequest): Promise<IEmptyResponse> {
    const req = new mngObjects.SelectRequest()
    req.setPath(payload.path)

    return this.makeCall<
      mngObjects.SelectRequest,
      google_protobuf_empty_pb.Empty
    >('scriptDelete', req)
  }

  scriptRename(payload: IRenameRequest): Promise<IEmptyResponse> {
    const req = new mngObjects.RenameRequest()
    req.setPath(payload.path)
    req.setNewPath(payload.newPath)

    return this.makeCall<
      mngObjects.RenameRequest,
      google_protobuf_empty_pb.Empty
    >('scriptRename', req)
  }

  scriptRead(payload: ISelectRequest): Promise<IScript> {
    const req = new mngObjects.SelectRequest()
    req.setPath(payload.path)

    return this.makeCall<mngObjects.SelectRequest, mngObjects.Script>(
      'scriptRead',
      req
    ).then(createScript)
  }

  // CRON
  cronSet(payload: ICronRules): Promise<IEmptyResponse> {
    const req = new mngObjects.Cron()

    const rules: mngObjects.CronItem[] = []
    payload.rules.forEach((item) => {
      const cronItem = new mngObjects.CronItem()
      cronItem.setPath(item.path)

      if (item.timer) {
        const timer = new mngObjects.Timer()
        timer.setType(item.timer.type)
        timer.setActive(item.timer.active)
        timer.setStart(item.timer.start)
        timer.setNext(item.timer.next)

        if (item.timer.repeat) {
          const repeat = new mngObjects.Timer.Repeat()

          if (item.timer.repeat.custom) {
            const custom = new mngObjects.Timer.Repeat.Custom()
            custom.setMinutes(item.timer.repeat.custom.minutes)

            repeat.setCustom(custom)
          } else if (item.timer.repeat.daily) {
            const daily = new mngObjects.Timer.Repeat.Daily()
            daily.setMinutes(item.timer.repeat.daily.minutes)
            daily.setDaysList(item.timer.repeat.daily.days)

            repeat.setDaily(daily)
          } else if (item.timer.repeat.monthly) {
            const monthly = new mngObjects.Timer.Repeat.Monthly()
            monthly.setMinutes(item.timer.repeat.monthly.minutes)
            monthly.setLastDate(item.timer.repeat.monthly.lastDate)
            monthly.setDaysList(item.timer.repeat.monthly.days)
            monthly.setMonthsList(item.timer.repeat.monthly.months)

            repeat.setMonthly(monthly)
          }

          timer.setRepeat(repeat)
        }
        cronItem.setTimer(timer)
      }

      rules.push(cronItem)
    })

    req.setRulesList(rules)

    return this.makeCall<mngObjects.Cron, google_protobuf_empty_pb.Empty>(
      'cronSet',
      req
    )
  }

  cronRead(): Promise<ICronRules> {
    const req = new google_protobuf_empty_pb.Empty()

    return this.makeCall<google_protobuf_empty_pb.Empty, mngObjects.Cron>(
      'cronRead',
      req
    ).then(createCronRules)
  }

  // WebServer
  processes(): Promise<IProcessInfo[]> {
    const req = new google_protobuf_empty_pb.Empty()

    return this.makeCall<
      google_protobuf_empty_pb.Empty,
      mngObjects.ProcessList
    >('processes', req).then((res) => res.getListList().map(createProcessInfo))
  }

  webServerRun(payload: IReplica): Promise<IEmptyResponse> {
    const req = new mngObjects.Replica()
    req.setId(payload.id)
    req.setAppName(payload.appName)
    req.setVersion(payload.version)
    req.setGoVersion(payload.goVersion)
    req.setBuildDate(payload.buildDate)
    req.setCommit(payload.commit)

    return this.makeCall<mngObjects.Replica, google_protobuf_empty_pb.Empty>(
      'webServerRun',
      req
    )
  }

  webServerStop(payload: IReplica): Promise<IEmptyResponse> {
    const req = new mngObjects.Replica()
    req.setId(payload.id)
    req.setAppName(payload.appName)
    req.setVersion(payload.version)
    req.setGoVersion(payload.goVersion)
    req.setBuildDate(payload.buildDate)
    req.setCommit(payload.commit)

    return this.makeCall<mngObjects.Replica, google_protobuf_empty_pb.Empty>(
      'webServerStop',
      req
    )
  }

  // AsyncScriptRun
  asyncScriptRun(payload: ISelectRequest): Promise<IEmptyResponse> {
    const req = new mngObjects.SelectRequest()
    req.setPath(payload.path)

    return this.makeCall<
      mngObjects.SelectRequest,
      google_protobuf_empty_pb.Empty
    >('asyncScriptRun', req)
  }

  asyncScriptStop(payload: ISelectProcess): Promise<IEmptyResponse> {
    const req = new mngObjects.ProcessSelect()
    req.setReplica(payload.replica)
    req.setPid(payload.pid)

    return this.makeCall<
      mngObjects.ProcessSelect,
      google_protobuf_empty_pb.Empty
    >('asyncScriptStop', req)
  }

  // Dependencies
  dependenciesUpdate(): Promise<IEmptyResponse> {
    const req = new google_protobuf_empty_pb.Empty()

    return this.makeCall<
      google_protobuf_empty_pb.Empty,
      google_protobuf_empty_pb.Empty
    >('dependenciesUpdate', req)
  }

  dependenciesDeleteDir(): Promise<IEmptyResponse> {
    const req = new google_protobuf_empty_pb.Empty()

    return this.makeCall<
      google_protobuf_empty_pb.Empty,
      google_protobuf_empty_pb.Empty
    >('dependenciesDeleteDir', req)
  }

  protected getClientConstructor() {
    return ManagerClient
  }
}
