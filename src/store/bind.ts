import { IApplicationState } from "src/store/state";

export function bind<R, T extends (state: IApplicationState) => R>(
    target: any,
    func: T
) {
    return func.bind(target) as T;
}