/**
 * @file `Task<A>` represents an asynchronous computation that yields a value of type `A` and **never fails**.
 * If you want to represent an asynchronous computation that may fail, please see `TaskEither`.
 */
import { IO } from './IO'
import { Monad1 } from './Monad'
import { MonadTask1 } from './MonadTask'
import { Monoid } from './Monoid'
import { pipeable } from './pipeable'
import { Semigroup } from './Semigroup'

declare module './HKT' {
  interface URItoKind<A> {
    Task: Task<A>
  }
}

/**
 * @since 2.0.0
 */
export const URI = 'Task'

/**
 * @since 2.0.0
 */
export type URI = typeof URI

/**
 * @since 2.0.0
 */
export interface Task<A> {
  (): Promise<A>
}

/**
 * @since 2.0.0
 */
export const never: Task<never> = () => new Promise(_ => undefined)

/**
 * @since 2.0.0
 */
export function getSemigroup<A>(S: Semigroup<A>): Semigroup<Task<A>> {
  return {
    concat: (x, y) => () => x().then(rx => y().then(ry => S.concat(rx, ry)))
  }
}

/**
 * @since 2.0.0
 */
export function getMonoid<A>(M: Monoid<A>): Monoid<Task<A>> {
  return {
    concat: getSemigroup(M).concat,
    empty: task.of(M.empty)
  }
}

/**
 * @since 2.0.0
 */
export function getRaceMonoid<A = never>(): Monoid<Task<A>> {
  return {
    concat: (x, y) => () =>
      new Promise((resolve, reject) => {
        let running = true
        const resolveFirst = (a: A) => {
          if (running) {
            running = false
            resolve(a)
          }
        }
        const rejectFirst = (e: any) => {
          if (running) {
            running = false
            reject(e)
          }
        }
        x().then(resolveFirst, rejectFirst)
        y().then(resolveFirst, rejectFirst)
      }),
    empty: never
  }
}

/**
 * @since 2.0.0
 */
export function delay(millis: number): <A>(ma: Task<A>) => Task<A> {
  return ma => () =>
    new Promise(resolve => {
      setTimeout(() => {
        // tslint:disable-next-line: no-floating-promises
        ma().then(resolve)
      }, millis)
    })
}

/**
 * @since 2.0.0
 */
export function fromIO<A>(ma: IO<A>): Task<A> {
  return () => Promise.resolve(ma())
}

const identity = <A>(a: A): A => a

/**
 * @since 2.0.0
 */
export function of<A>(a: A): Task<A> {
  return () => Promise.resolve(a)
}

/**
 * @since 2.0.0
 */
export const task: Monad1<URI> & MonadTask1<URI> = {
  URI,
  map: (ma, f) => () => ma().then(f),
  of,
  ap: (mab, ma) => () => Promise.all([mab(), ma()]).then(([f, a]) => f(a)),
  chain: (ma, f) => () => ma().then(a => f(a)()),
  fromIO,
  fromTask: identity
}

/**
 * Like `Task` but `ap` is sequential
 *
 * @since 2.0.0
 */
export const taskSeq: typeof task = {
  ...task,
  ap: (mab, ma) => () => mab().then(f => ma().then(a => f(a)))
}

const { ap, apFirst, apSecond, chain, chainFirst, flatten, map } = pipeable(task)

export { ap, apFirst, apSecond, chain, chainFirst, flatten, map }
