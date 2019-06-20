import { Either } from './Either';
import { IO } from './IO';
import { IOEither } from './IOEither';
import { Monad4 } from './Monad';
import { Reader } from './Reader';
import { ReaderEither } from './ReaderEither';
import * as RTE from './ReaderTaskEither';
import { State } from './State';
import { Task } from './Task';
import { TaskEither } from './TaskEither';
import ReaderTaskEither = RTE.ReaderTaskEither;
import { MonadThrow4 } from './MonadThrow';
declare module './HKT' {
    interface URItoKind4<S, R, E, A> {
        StateReaderTaskEither: StateReaderTaskEither<S, R, E, A>;
    }
}
/**
 * @since 2.0.0
 */
export declare const URI = "StateReaderTaskEither";
/**
 * @since 2.0.0
 */
export declare type URI = typeof URI;
/**
 * @since 2.0.0
 */
export interface StateReaderTaskEither<S, R, E, A> {
    (s: S): ReaderTaskEither<R, E, [A, S]>;
}
/**
 * @since 2.0.0
 */
export declare function run<S, R, E, A>(ma: StateReaderTaskEither<S, R, E, A>, s: S, r: R): Promise<Either<E, [A, S]>>;
/**
 * Run a computation in the `StateReaderTaskEither` monad, discarding the final state
 *
 * @since 2.0.0
 */
export declare const evalState: <S, R, E, A>(ma: StateReaderTaskEither<S, R, E, A>, s: S) => ReaderTaskEither<R, E, A>;
/**
 * Run a computation in the `StateReaderTaskEither` monad discarding the result
 *
 * @since 2.0.0
 */
export declare const execState: <S, R, E, A>(ma: StateReaderTaskEither<S, R, E, A>, s: S) => ReaderTaskEither<R, E, S>;
/**
 * @since 2.0.0
 */
export declare function left<S, R, E = never, A = never>(e: E): StateReaderTaskEither<S, R, E, A>;
/**
 * @since 2.0.0
 */
export declare const right: <S, R, E = never, A = never>(a: A) => StateReaderTaskEither<S, R, E, A>;
/**
 * @since 2.0.0
 */
export declare function rightTask<S, R, E = never, A = never>(ma: Task<A>): StateReaderTaskEither<S, R, E, A>;
/**
 * @since 2.0.0
 */
export declare function leftTask<S, R, E = never, A = never>(me: Task<E>): StateReaderTaskEither<S, R, E, A>;
/**
 * @since 2.0.0
 */
export declare function fromTaskEither<S, R, E, A>(ma: TaskEither<E, A>): StateReaderTaskEither<S, R, E, A>;
/**
 * @since 2.0.0
 */
export declare function rightReader<S, R, E = never, A = never>(ma: Reader<R, A>): StateReaderTaskEither<S, R, E, A>;
/**
 * @since 2.0.0
 */
export declare function leftReader<S, R, E = never, A = never>(me: Reader<R, E>): StateReaderTaskEither<S, R, E, A>;
/**
 * @since 2.0.0
 */
export declare function fromIOEither<S, R, E, A>(ma: IOEither<E, A>): StateReaderTaskEither<S, R, E, A>;
/**
 * @since 2.0.0
 */
export declare function fromReaderEither<S, R, E, A>(ma: ReaderEither<R, E, A>): StateReaderTaskEither<S, R, E, A>;
/**
 * @since 2.0.0
 */
export declare function rightIO<S, R, E = never, A = never>(ma: IO<A>): StateReaderTaskEither<S, R, E, A>;
/**
 * @since 2.0.0
 */
export declare function leftIO<S, R, E = never, A = never>(me: IO<E>): StateReaderTaskEither<S, R, E, A>;
/**
 * @since 2.0.0
 */
export declare const rightState: <S, R, E = never, A = never>(ma: State<S, A>) => StateReaderTaskEither<S, R, E, A>;
/**
 * @since 2.0.0
 */
export declare function leftState<S, R, E = never, A = never>(me: State<S, E>): StateReaderTaskEither<S, R, E, A>;
/**
 * @since 2.0.0
 */
export declare const fromReaderTaskEither: <S, R, E, A>(ma: ReaderTaskEither<R, E, A>) => StateReaderTaskEither<S, R, E, A>;
/**
 * Get the current state
 *
 * @since 2.0.0
 */
export declare const get: <S, R, E = never>() => StateReaderTaskEither<S, R, E, S>;
/**
 * Set the state
 *
 * @since 2.0.0
 */
export declare const put: <S, R, E = never>(s: S) => StateReaderTaskEither<S, R, E, void>;
/**
 * Modify the state by applying a function to the current state
 *
 * @since 2.0.0
 */
export declare const modify: <S, R, E = never>(f: (s: S) => S) => StateReaderTaskEither<S, R, E, void>;
/**
 * Get a value which depends on the current state
 *
 * @since 2.0.0
 */
export declare const gets: <S, R, E = never, A = never>(f: (s: S) => A) => StateReaderTaskEither<S, R, E, A>;
/**
 * @since 2.0.0
 */
export declare const stateReaderTaskEither: Monad4<URI> & MonadThrow4<URI>;
/**
 * Like `stateReaderTaskEither` but `ap` is sequential
 * @since 2.0.0
 */
export declare const stateReaderTaskEitherSeq: typeof stateReaderTaskEither;
declare const ap: <S, R, E, A>(fa: StateReaderTaskEither<S, R, E, A>) => <B>(fab: StateReaderTaskEither<S, R, E, (a: A) => B>) => StateReaderTaskEither<S, R, E, B>, apFirst: <S, R, E, B>(fb: StateReaderTaskEither<S, R, E, B>) => <A>(fa: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, A>, apSecond: <S, R, E, B>(fb: StateReaderTaskEither<S, R, E, B>) => <A>(fa: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B>, chain: <S, R, E, A, B>(f: (a: A) => StateReaderTaskEither<S, R, E, B>) => (ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B>, chainFirst: <S, R, E, A, B>(f: (a: A) => StateReaderTaskEither<S, R, E, B>) => (ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, A>, flatten: <S, R, E, A>(mma: StateReaderTaskEither<S, R, E, StateReaderTaskEither<S, R, E, A>>) => StateReaderTaskEither<S, R, E, A>, map: <A, B>(f: (a: A) => B) => <S, R, E>(fa: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B>, fromEither: <S, R, E, A>(ma: Either<E, A>) => StateReaderTaskEither<S, R, E, A>, fromOption: <E>(onNone: () => E) => <S, R, A>(ma: import("./Option").Option<A>) => StateReaderTaskEither<S, R, E, A>;
export { ap, apFirst, apSecond, chain, chainFirst, flatten, map, fromEither, fromOption };