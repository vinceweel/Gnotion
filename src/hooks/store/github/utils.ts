export const useCurry = function (func: Function) {
    return function curried (this: any, ...args: any[]) {
        if (args.length >= func.length) return func.apply(this, args)
        return (..._args: ConcatArray<any>[]) => {
            return curried.apply(this, args.concat(_args))
        }
    }
}
