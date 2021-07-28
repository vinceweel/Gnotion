import { getContext } from '.'

export const defineData = <T extends Requestor>(requestor: T) => requestor
export const defineAsyncData = <T extends AsyncRequestor>(requestor: T) =>
  requestor

type Meta = Record<string, any>

type Context = ReturnType<typeof getContext>

type Requestor<Data = any> = (
  context: Context,
  params: Record<string, any>,
) => Error | Data

type AsyncRequestor<Data = any> = (
  ...args: Parameters<Requestor<Data>>
) => Promise<ReturnType<Requestor<Data>>>
