// // Write a generic identity function that returns the value it receives 
// // without changing its type.
// function identity<T>(value: T): T {
//   return value;
// }




// string | number | boolean | null | undefined
// Write a function processValue that accepts:

// It should:

// - Log strings in uppercase.
// - Log numbers fixed to two decimal places.
// - Log booleans as `"True"` or `"False"`.
// - Throw an error for `null` or `undefined`.
// - Include a type assertion somewhere to narrow the type.

// let data: string | number | boolean | null | undefined

function processValue(adal: string | number | boolean | null | undefined){
    if(typeof(adal)=='string'){
    return adal.toUpperCase()
    }
    else if(typeof(adal)=='number'){
    return adal.toFixed(2)
    }
    else if(typeof(adal)=='boolean'){
    return adal
    }
    else if(typeof(adal)=='undefined'){
    throw ('variable have no data')
    
    }
    else if(typeof(adal)==null){
    return adal
    }
    else return adal as any
}
console.log(processValue(undefined));
