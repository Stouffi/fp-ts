import { Separated } from './Compactable';
import { Either } from './Either';
import { Eq } from './Eq';
import { Filterable2 } from './Filterable';
import { FilterableWithIndex2C } from './FilterableWithIndex';
import { Foldable, Foldable1, Foldable2, Foldable3 } from './Foldable';
import { Predicate } from './function';
import { HKT, Kind, Kind2, Kind3, URIS, URIS2, URIS3 } from './HKT';
import { Magma } from './Magma';
import { Monoid } from './Monoid';
import { Option } from './Option';
import { Ord } from './Ord';
import { Semigroup } from './Semigroup';
import { Show } from './Show';
import { TraversableWithIndex2C } from './TraversableWithIndex';
import { Unfoldable, Unfoldable1 } from './Unfoldable';
import { Witherable2C } from './Witherable';
declare module './HKT' {
    interface URItoKind2<E, A> {
        Map: Map<E, A>;
    }
}
/**
 * @since 2.0.0
 */
export declare const URI = "Map";
/**
 * @since 2.0.0
 */
export declare type URI = typeof URI;
/**
 * @since 2.0.0
 */
export declare function getShow<K, A>(SK: Show<K>, SA: Show<A>): Show<Map<K, A>>;
/**
 * Calculate the number of key/value pairs in a map
 *
 * @since 2.0.0
 */
export declare function size<K, A>(d: Map<K, A>): number;
/**
 * Test whether or not a map is empty
 *
 * @since 2.0.0
 */
export declare function isEmpty<K, A>(d: Map<K, A>): boolean;
/**
 * Test whether or not a key exists in a map
 *
 * @since 2.0.0
 */
export declare function member<K>(E: Eq<K>): <A>(k: K, m: Map<K, A>) => boolean;
/**
 * Test whether or not a value is a member of a map
 *
 * @since 2.0.0
 */
export declare function elem<A>(E: Eq<A>): <K>(a: A, m: Map<K, A>) => boolean;
/**
 * Get a sorted array of the keys contained in a map
 *
 * @since 2.0.0
 */
export declare function keys<K>(O: Ord<K>): <A>(m: Map<K, A>) => Array<K>;
/**
 * Get a sorted array of the values contained in a map
 *
 * @since 2.0.0
 */
export declare function values<A>(O: Ord<A>): <K>(m: Map<K, A>) => Array<A>;
/**
 * @since 2.0.0
 */
export declare function collect<K>(O: Ord<K>): <A, B>(f: (k: K, a: A) => B) => (m: Map<K, A>) => Array<B>;
/**
 * Get a sorted of the key/value pairs contained in a map
 *
 * @since 2.0.0
 */
export declare function toArray<K>(O: Ord<K>): <A>(m: Map<K, A>) => Array<[K, A]>;
/**
 * Unfolds a map into a list of key/value pairs
 *
 * @since 2.0.0
 */
export declare function toUnfoldable<K, F extends URIS>(O: Ord<K>, U: Unfoldable1<F>): <A>(d: Map<K, A>) => Kind<F, [K, A]>;
export declare function toUnfoldable<K, F>(O: Ord<K>, U: Unfoldable<F>): <A>(d: Map<K, A>) => HKT<F, [K, A]>;
/**
 * Insert or replace a key/value pair in a map
 *
 * @since 2.0.0
 */
export declare function insertAt<K>(E: Eq<K>): <A>(k: K, a: A) => (m: Map<K, A>) => Map<K, A>;
/**
 * Delete a key and value from a map
 *
 * @since 2.0.0
 */
export declare function deleteAt<K>(E: Eq<K>): (k: K) => <A>(m: Map<K, A>) => Map<K, A>;
/**
 * @since 2.0.0
 */
export declare function updateAt<K>(E: Eq<K>): <A>(k: K, a: A) => (m: Map<K, A>) => Option<Map<K, A>>;
/**
 * @since 2.0.0
 */
export declare function modifyAt<K>(E: Eq<K>): <A>(k: K, f: (a: A) => A) => (m: Map<K, A>) => Option<Map<K, A>>;
/**
 * Delete a key and value from a map, returning the value as well as the subsequent map
 *
 * @since 2.0.0
 */
export declare function pop<K>(E: Eq<K>): (k: K) => <A>(m: Map<K, A>) => Option<[A, Map<K, A>]>;
/**
 * Lookup the value for a key in a `Map`.
 * If the result is a `Some`, the existing key is also returned.
 *
 * @since 2.0.0
 */
export declare function lookupWithKey<K>(E: Eq<K>): <A>(k: K, m: Map<K, A>) => Option<[K, A]>;
/**
 * Lookup the value for a key in a `Map`.
 *
 * @since 2.0.0
 */
export declare function lookup<K>(E: Eq<K>): <A>(k: K, m: Map<K, A>) => Option<A>;
/**
 * Test whether or not one Map contains all of the keys and values contained in another Map
 *
 * @since 2.0.0
 */
export declare function isSubmap<K, A>(SK: Eq<K>, SA: Eq<A>): (d1: Map<K, A>, d2: Map<K, A>) => boolean;
/**
 * @since 2.0.0
 */
export declare const empty: Map<never, never>;
/**
 * @since 2.0.0
 */
export declare function getEq<K, A>(SK: Eq<K>, SA: Eq<A>): Eq<Map<K, A>>;
/**
 * Gets `Monoid` instance for Maps given `Semigroup` instance for their values
 *
 * @since 2.0.0
 */
export declare function getMonoid<K, A>(SK: Eq<K>, SA: Semigroup<A>): Monoid<Map<K, A>>;
/**
 * Create a map with one key/value pair
 *
 * @since 2.0.0
 */
export declare function singleton<K, A>(k: K, a: A): Map<K, A>;
/**
 * Create a map from a foldable collection of key/value pairs, using the
 * specified `Magma` to combine values for duplicate keys.
 *
 * @since 2.0.0
 */
export declare function fromFoldable<F extends URIS3, K, A>(E: Eq<K>, M: Magma<A>, F: Foldable3<F>): <R, E>(fka: Kind3<F, R, E, [K, A]>) => Map<K, A>;
export declare function fromFoldable<F extends URIS2, K, A>(E: Eq<K>, M: Magma<A>, F: Foldable2<F>): <E>(fka: Kind2<F, E, [K, A]>) => Map<K, A>;
export declare function fromFoldable<F extends URIS, K, A>(E: Eq<K>, M: Magma<A>, F: Foldable1<F>): (fka: Kind<F, [K, A]>) => Map<K, A>;
export declare function fromFoldable<F, K, A>(E: Eq<K>, M: Magma<A>, F: Foldable<F>): (fka: HKT<F, [K, A]>) => Map<K, A>;
/**
 * @since 2.0.0
 */
export declare function getFilterableWithIndex<K = never>(): FilterableWithIndex2C<URI, K, K>;
/**
 * @since 2.0.0
 */
export declare function getWitherable<K>(O: Ord<K>): Witherable2C<URI, K> & TraversableWithIndex2C<URI, K, K>;
/**
 * @since 2.0.0
 */
export declare const map_: Filterable2<URI>;
declare const filter: {
    <A, B extends A>(refinement: import("./function").Refinement<A, B>): <E>(fa: Map<E, A>) => Map<E, B>;
    <A>(predicate: Predicate<A>): <E>(fa: Map<E, A>) => Map<E, A>;
}, filterMap: <A, B>(f: (a: A) => Option<B>) => <E>(fa: Map<E, A>) => Map<E, B>, map: <A, B>(f: (a: A) => B) => <E>(fa: Map<E, A>) => Map<E, B>, partition: {
    <A, B extends A>(refinement: import("./function").Refinement<A, B>): <E>(fa: Map<E, A>) => Separated<Map<E, A>, Map<E, B>>;
    <A>(predicate: Predicate<A>): <E>(fa: Map<E, A>) => Separated<Map<E, A>, Map<E, A>>;
}, partitionMap: <A, B, C>(f: (a: A) => Either<B, C>) => <E>(fa: Map<E, A>) => Separated<Map<E, B>, Map<E, C>>, compact: <E, A>(fa: Map<E, Option<A>>) => Map<E, A>, separate: <E, A, B>(fa: Map<E, Either<A, B>>) => Separated<Map<E, A>, Map<E, B>>;
export { filter, filterMap, map, partition, partitionMap, compact, separate };