/**
 * RxJS Operators
 * 
 * An operator is a function
 *  - Used to transform/manipulate items
 *  - Apply opeartors in sequence using the Observable's `pipe()` method
 * 
    of(2, 4, 6)
        .pipe(
            map(item => item* 2),
            tap(item => console.log(item)),
            take(3)
        ).subscribe(item => console.log(item));
 * 
 * - The above example will process each operator in the pie one after the other in sequence
 * 
 * map Operator
 * 
 * Transforms each emttied item
 * map(item => item* 2) 
 *  - for each item emitted in, one mapped item is emitted out
 *  - Each item emitted is tranformed as specified in the given function
 * 
 * tap Operator
 * 
 * Taps into the emissions without affecting the items
 * tap(item => console.log(item))
 * - For each item emitted in, the same item is emitted out
 * - Used for 
 *  - Debugging
 *  - Performing actions outside of the flow of data (side effects)
 * - considered a utility operator
 * 
 * take Operator
 * 
 * Emits a specified number of items
 * take(2)
 * Automatically completes
 * Used for
 *  - Taking a specified number of items
 *  - Limiting unlimited Observables
 * - Above example lets the pipe know how many pipes to take before cutting of emissions
 * 
 *  
 * 
 * 
 * 
 */
