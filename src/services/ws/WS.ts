// import ScorocodeError from '../../utils/ScorocodeError'
import Service, { ServiceConfig } from '../Service'

export interface WSConfig {
  emitSafeTimeout?: number
}

export interface IScMessage {
  userId?: string
  event: string
  payload: any
}

interface OnMessageHandler {
  (message: IScMessage, cb?: (response: any) => void): void
}

const DEFAULT_CONFIG: WSConfig = {
  emitSafeTimeout: 1000,
}

export default class WS extends Service<WSConfig & ServiceConfig> {
  private _events: { [name: string]: OnMessageHandler[] } = {}

  constructor(config: WSConfig & ServiceConfig) {
    super({
      ...DEFAULT_CONFIG,
      ...config,
    })

    // this.app.client().ws.on(WS_EVENTS.onMessage, this._onMessage)
  }

  get events(): { [name: string]: OnMessageHandler[] } {
    if (!this._events) {
      this._events = {}
    }

    return this._events
  }

  // Messaging
  onMessage(event: string, listener: OnMessageHandler): void {
    if (!this.events[event]) {
      this.events[event] = []
    }

    this.events[event].push(listener)
  }

  onMessageOnce(event: string, listener: (...args: any[]) => void): void {
    const handler = (...args: any[]) => {
      this.removeMessageListener(event, handler)
      listener.apply(this, args)
    }

    this.onMessage(event, handler)
  }

  removeMessageListener(
    event: string,
    listener: (...args: any[]) => void
  ): void {
    if (this.events[event]) {
      const idx = this.events[event].indexOf(listener)

      if (idx > -1) {
        this.events[event].splice(idx, 1)
      }
    }
  }

  sendMessage(event: string, payload: any, userId?: string): Promise<any> {
    return this.app.client().ws.sendMessage({
      clientId: userId,
      body: JSON.stringify({
        event,
        payload,
      }),
    })
  }

  // private _onMessage = (message: IScMessage, cb?: (response: any) => void) => {
  //   const event = message.event
  //
  //   if (event && this.events[event]) {
  //     const listeners = this.events[event]
  //
  //     if (listeners) {
  //       listeners.forEach((handler: OnMessageHandler) =>
  //         handler.call(this, message, cb)
  //       )
  //     }
  //   }
  // }
}
