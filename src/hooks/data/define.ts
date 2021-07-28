import { context } from '.'

export const defineData = <T extends Requestor>(requestor: T) => requestor
export const defineAsyncData = <T extends AsyncRequestor>(requestor: T) =>
  requestor

type Meta = Record<string, any>

type Context = typeof context

type Requestor<Data = any> = (
  context: Context,
  params: Record<string, any>,
) => [null | Error, Data?, Meta?]

type AsyncRequestor<Data = any> = (
  ...args: Parameters<Requestor<Data>>
) => Promise<ReturnType<Requestor<Data>>>
