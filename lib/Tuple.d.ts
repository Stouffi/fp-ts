/**
 * @file Adapted from https://github.com/purescript/purescript-tuples
 */
import { Applicative2C } from './Applicative';
import { Apply2C } from './Apply';
import { Bifunctor2 } from './Bifunctor';
import { Chain2C } from './Chain';
import { ChainRec2C } from './ChainRec';
import { Comonad2 } from './Comonad';
import { Foldable2 } from './Foldable';
import { Monad2C } from './Monad';
import { Monoid } from './Monoid';
import { Semigroup } from './Semigroup';
import { Semigroupoid2 } from './Semigroupoid';
import { Traversable2 } from './Traversable';
declare module './HKT' {
    interface URItoKind2<E, A> {
        Tuple: [A, E];
    }
}
/**
 * @since 2.0.0
 */
export declare const URI = "Tuple";
/**
 * @since 2.0.0
 */
export declare type URI = typeof URI;
/**
 * @since 2.0.0
 */
export declare function fst<A, S>(sa: [A, S]): A;
/**
 * @since 2.0.0
 */
export declare function snd<A, S>(sa: [A, S]): S;
/**
 * @since 2.0.0
 */
export declare function swap<A, S>(sa: [A, S]): [S, A];
/**
 * @since 2.0.0
 */
export declare function getApply<S>(S: Semigroup<S>): Apply2C<URI, S>;
/**
 * @since 2.0.0
 */
export declare function getApplicative<S>(M: Monoid<S>): Applicative2C<URI, S>;
/**
 * @since 2.0.0
 */
export declare function getChain<S>(S: Semigroup<S>): Chain2C<URI, S>;
/**
 * @since 2.0.0
 */
export declare function getMonad<S>(M: Monoid<S>): Monad2C<URI, S>;
/**
 * @since 2.0.0
 */
export declare function getChainRec<S>(M: Monoid<S>): ChainRec2C<URI, S>;
/**
 * @since 2.0.0
 */
export declare const tuple: Semigroupoid2<URI> & Bifunctor2<URI> & Comonad2<URI> & Foldable2<URI> & Traversable2<URI>;
declare const bimap: <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fa: [A, E]) => [B, G], compose: <E, A>(la: [A, E]) => <B>(ab: [B, A]) => [B, E], duplicate: <E, A>(ma: [A, E]) => [[A, E], E], extend: <E, A, B>(f: (fa: [A, E]) => B) => (ma: [A, E]) => [B, E], foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => <E>(fa: [A, E]) => M, map: <A, B>(f: (a: A) => B) => <E>(fa: [A, E]) => [B, E], mapLeft: <E, G, A>(f: (e: E) => G) => (fa: [A, E]) => [A, G], reduce: <A, B>(b: B, f: (b: B, a: A) => B) => <E>(fa: [A, E]) => B, reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => <E>(fa: [A, E]) => B;
export { bimap, compose, duplicate, extend, foldMap, map, mapLeft, reduce, reduceRight };