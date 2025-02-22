<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# ArrayIndex

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Array index constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

In JavaScript, only strings and symbols are valid property names. When providing values for property names which are not strings or symbols, the values are serialized to strings **prior to** attempting to access property values. For example, the following

```javascript
// Create an array:
var x = [ 1, 2, 3, 4 ];

// Define a list of indices for elements we want to retrieve from `x`:
var y = [ 0, 2 ];

// Attempt to retrieve the desired elements:
var v = x[ y ]; // => desired: [ 1, 3 ]
// returns undefined
```

is equivalent to

```javascript
var x = [ 1, 2, 3, 4 ];
var y = [ 0, 2 ];

var v = x[ y.toString() ];
// returns undefined

// ...which is equivalent to:
v = x[ '0,2' ];
// returns undefined
```

Accordingly, in order to circumvent built-in property access behavior and support non-traditional access patterns, one can leverage [`Proxy`][@stdlib/proxy/ctor] objects which allow one to intercept property access and to perform transformations before attempting to access elements in a target object.

To support the access pattern shown in the example above, one can leverage built-in string serialization behavior to reconstruct the original property value provided prior to serialization. The `ArrayIndex` constructor described below provides one such mechanism.

Specifically, instantiated `ArrayIndex` objects are assigned a unique identifier and stored in a local cache. When provided as property values to `ArrayIndex` consumers, instantiated objects serialize to a string containing their unique identifier. `ArrayIndex` consumers can then parse the serialized string to obtain the unique identifier and subsequently recover the original array from the local cache.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/array-index
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var ArrayIndex = require( '@stdlib/array-index' );
```

<a name="main"></a>

#### ArrayIndex( x\[, options] )

Wraps a provided array as an array index object.

```javascript
var x = [ 1, 2, 3, 4 ];

var idx = new ArrayIndex( x );
// returns <ArrayIndex>
```

The constructor accepts the following arguments:

-   **x**: input array.
-   **options**: function options.

The constructor accepts the following options:

-   **persist**: boolean indicating whether to continue persisting an index object after first usage. Default: `false`.

By default, an `ArrayIndex` is invalidated and removed from an internal cache immediately after a consumer resolves the underlying data associated with an `ArrayIndex` instance using the [`ArrayIndex.get()`](#static-method-get) static method. Immediate invalidation and cache removal ensures that references to the underlying array are not the source of memory leaks.

One may, however, want to reuse an `ArrayIndex` instance to avoid additional memory allocation. In order to persist an `ArrayIndex` and prevent automatic cache invalidation, set the `persist` option to `true`.

```javascript
var x = [ 1, 2, 3, 4 ];

var idx = new ArrayIndex( x, {
    'persist': true
});
// returns <ArrayIndex>

// ...

var o = ArrayIndex.get( idx.id );
// returns {...}

// ...

o = ArrayIndex.get( idx.id );
// returns {...}

// ...

// Explicitly free the array index:
ArrayIndex.free( idx.id );
```

In order to **prevent** memory leaks when working with persisted `ArrayIndex` instances, one **must** remember to manually free persisted instances using the [`ArrayIndex.free()`](#static-method-free) method.

* * *

### Properties

<a name="static-prop-name"></a>

#### ArrayIndex.name

String value of the `ArrayIndex` constructor name.

```javascript
var str = ArrayIndex.name;
// returns 'ArrayIndex'
```

<a name="prop-data"></a>

#### ArrayIndex.prototype.data

**Read-only** property returning the underlying array associated with an `ArrayIndex` instance.

```javascript
var Uint8Array = require( '@stdlib/array-uint8' );

var idx = new ArrayIndex( new Uint8Array( [ 1, 0, 1, 0 ] ) );
// returns <ArrayIndex>

var v = idx.data;
// returns <Uint8Array>[ 1, 0, 1, 0 ]
```

<a name="prop-dtype"></a>

#### ArrayIndex.prototype.dtype

**Read-only** property returning the data type of the underlying array associated with an `ArrayIndex` instance.

```javascript
var Uint8Array = require( '@stdlib/array-uint8' );

var idx = new ArrayIndex( new Uint8Array( [ 1, 0, 1, 0 ] ) );
// returns <ArrayIndex>

var dt = idx.dtype;
// returns 'uint8'
```

<a name="prop-id"></a>

#### ArrayIndex.prototype.id

**Read-only** property returning the unique identifier associated with an `ArrayIndex` instance.

```javascript
var Uint8Array = require( '@stdlib/array-uint8' );

var idx = new ArrayIndex( new Uint8Array( [ 1, 0, 1, 0 ] ) );
// returns <ArrayIndex>

var id = idx.id;
// returns <string>
```

The identifier should be used by `ArrayIndex` consumers to resolve the underlying data associated with an `ArrayIndex` instance.

<a name="prop-is-cached"></a>

#### ArrayIndex.prototype.isCached

**Read-only** property returning a boolean indicating whether an `ArrayIndex` instance is actively cached.

```javascript
var Uint8Array = require( '@stdlib/array-uint8' );

var idx = new ArrayIndex( new Uint8Array( [ 1, 0, 1, 0 ] ) );
// returns <ArrayIndex>

var out = idx.isCached;
// returns true
```

<a name="prop-type"></a>

#### ArrayIndex.prototype.type

**Read-only** property returning the array index type.

```javascript
var Uint8Array = require( '@stdlib/array-uint8' );

var idx = new ArrayIndex( new Uint8Array( [ 1, 0, 1, 0 ] ) );
// returns <ArrayIndex>

var t = idx.type;
// returns 'mask'
```

The following array index types are supported:

-   **mask**: mask array, in which a value of zero indicates to include a respective element and a value of one indicates to exclude a respective element. A mask array is the complement of a boolean array.
-   **bool**: boolean array, in which a value of `true` indicates to include a respective element and a value of `false` indicates to exclude a respective element. A boolean array is the complement of a mask array.
-   **int**: integer array, in which each element is an index indicating the position of an element to include. Elements are **not** required to be unique (i.e., more than element may resolve to the same position).

* * *

### Methods

<a name="static-method-free"></a>

#### ArrayIndex.free( id )

Frees the `ArrayIndex` associated with a provided identifier.

```javascript
var Uint8Array = require( '@stdlib/array-uint8' );

var idx = new ArrayIndex( new Uint8Array( [ 1, 0, 1, 0 ] ), {
    'persist': true
});
// returns <ArrayIndex>

// ...

var out = ArrayIndex.free( idx.id );
// returns true
```

Once an `ArrayIndex` is freed, the instance is invalid and can no longer be used. Any subsequent `ArrayIndex` operations (i.e., property and method access) will raise an exception.

<a name="static-method-get"></a>

#### ArrayIndex.get( id )

Returns the array associated with the `ArrayIndex` having a provided identifier.

```javascript
var Uint8Array = require( '@stdlib/array-uint8' );

var idx = new ArrayIndex( new Uint8Array( [ 1, 0, 1, 0 ] ), {
    'persist': true
});
// returns <ArrayIndex>

// ...

var o = ArrayIndex.get( idx.id );
// returns {...}

var d = o.data;
// returns <Uint8Array>[ 1, 0, 1, 0 ]

var t = o.type;
// returns 'mask'

var dt = o.dtype;
// returns 'uint8'
```

The returned object has the following properties:

-   **data**: the underlying array associated with the `ArrayIndex` identified by the provided `id`.
-   **type**: the type of array index. One of the following: `'int'`, `'bool'`, or `'mask'`.
-   **dtype**: the data type of the underlying array.

If the `ArrayIndex` associated with a provided identifier was not explicitly persisted, calling this method will cause the `ArrayIndex` to be invalidated and removed from an internal cache. Any subsequent instance operations (i.e., property and method access) will raise an exception.

<a name="method-to-string"></a>

#### ArrayIndex.prototype.toString()

Serializes an `ArrayIndex` as a string.

```javascript
var Uint8Array = require( '@stdlib/array-uint8' );

var idx = new ArrayIndex( new Uint8Array( [ 1, 0, 1, 0 ] ) );
// returns <ArrayIndex>

var str = idx.toString();
// e.g., 'ArrayIndex<0>'
```

An `ArrayIndex` is intended to be an opaque object used by objects supporting "fancy" indexing (e.g., [fancy arrays][@stdlib/array/to-fancy]). As such, when serialized as a string, a serialized `ArrayIndex` includes only the unique identifier associated with the respective instance.

<a name="method-to-json"></a>

#### ArrayIndex.prototype.toJSON()

Serializes an `ArrayIndex` as a [JSON][json] object.

```javascript
var Uint8Array = require( '@stdlib/array-uint8' );

var idx = new ArrayIndex( new Uint8Array( [ 1, 0, 1, 0 ] ) );
// returns <ArrayIndex>

var o = idx.toJSON();
// returns { 'type': 'ArrayIndex', 'data': { 'type': 'Uint8Array', 'data': [ 1, 0, 1, 0 ] } }
```

`JSON.stringify()` implicitly calls this method when stringifying an `ArrayIndex` instance.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

* * *

<section class="notes">

## Notes

-   `ArrayIndex` instances have no explicit functionality; however, they are used by ["fancy" arrays][@stdlib/array/to-fancy] and other packages for element retrieval and assignment.

-   Because `ArrayIndex` instances leverage an internal cache implementing the **singleton pattern**, one **must** be sure to use the same `ArrayIndex` constructor as `ArrayIndex` consumers. If one uses a different `ArrayIndex` constructor, the consumer will **not** be able to resolve the original wrapped array, as the consumer will attempt to resolve an `ArrayIndex` instance in the wrong internal cache.

-   Because non-persisted `ArrayIndex` instances are freed after first use, in order to avoid holding onto memory and to allow garbage collection, one should avoid scenarios in which an `ArrayIndex` is never used. For example,

    ```javascript
    var Uint8Array = require( '@stdlib/array-uint8' );

    var data = new Uint8Array( [ 1, 0, 0, 0 ] );
    var idx = new ArrayIndex( data );

    var o;
    if ( data[ 0 ] === 0 ) {
        // Do something with `idx`...
        o = ArrayIndex.get( idx.id );

        // ...
    }
    ```

    will leak memory as `idx` is only consumed within an `if` block which never evaluates. In such scenarios, one should either refactor to avoid inadvertently holding onto memory or explicitly free the `ArrayIndex`. 

    ```javascript
    var Uint8Array = require( '@stdlib/array-uint8' );

    var data = new Uint8Array( [ 1, 0, 0, 0 ] );
    var idx = new ArrayIndex( data );

    var o;
    if ( data[ 0 ] === 0 ) {
        // Do something with `idx`...
        o = ArrayIndex.get( idx.id );

        // ...
    } else {
        ArrayIndex.free( idx.id );
    }
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Uint8Array = require( '@stdlib/array-uint8' );
var Int32Array = require( '@stdlib/array-int32' );
var BooleanArray = require( '@stdlib/array-bool' );
var ArrayIndex = require( '@stdlib/array-index' );

var x = new Uint8Array( [ 1, 0, 1, 0 ] );
var i = new ArrayIndex( x );
// returns <ArrayIndex>

var o = ArrayIndex.get( i.id );
// returns {...}

console.log( 'Type: %s. Data type: %s.', o.type, o.dtype );

x = [ true, false, true, false ];
i = new ArrayIndex( x );
// returns <ArrayIndex>

o = ArrayIndex.get( i.id );
// returns {...}

console.log( 'Type: %s. Data type: %s.', o.type, o.dtype );

x = new BooleanArray( [ true, false, true, false ] );
i = new ArrayIndex( x );
// returns <ArrayIndex>

o = ArrayIndex.get( i.id );
// returns {...}

console.log( 'Type: %s. Data type: %s.', o.type, o.dtype );

x = new Int32Array( [ 1, 3, 4, 7 ] );
i = new ArrayIndex( x );
// returns <ArrayIndex>

o = ArrayIndex.get( i.id );
// returns {...}

console.log( 'Type: %s. Data type: %s.', o.type, o.dtype );

x = [ 1, 3, 4, 7 ];
i = new ArrayIndex( x );
// returns <ArrayIndex>

o = ArrayIndex.get( i.id );
// returns {...}

console.log( 'Type: %s. Data type: %s.', o.type, o.dtype );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array-to-fancy`][@stdlib/array/to-fancy]</span><span class="delimiter">: </span><span class="description">convert an array to an object supporting fancy indexing.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-index.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-index

[test-image]: https://github.com/stdlib-js/array-index/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-index/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-index/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-index?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-index.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-index/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-index/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-index/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-index/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-index/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-index/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-index/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-index/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-index/main/LICENSE

[json]: http://www.json.org/

[@stdlib/array/to-fancy]: https://github.com/stdlib-js/array-to-fancy

[@stdlib/proxy/ctor]: https://github.com/stdlib-js/proxy-ctor

</section>

<!-- /.links -->
