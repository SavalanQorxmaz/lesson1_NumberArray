


`----------------- SWAP EACH OTHER WITH THIRD VARIABLE----------------------------------- ` 
 

const swap3 = () => {

   let a = Number(prompt(`1-ci ededi daxil et`));
   let b= Number(prompt(`ikinci ededi daxil et`));

    console.log(typeof a);
    console.log(typeof b);
    console.log(a.valueOf() );
    console.log(b.valueOf() );

    if(isNaN(a) || isNaN(b) ) {
        console.log(` arqumentler eded deyil`);     
    }
    else {
    console.log(`   a = ${a},   b = ${b}`)
    let c = a;
    a = b;
    b = c;
    console.log(`   a = ${a},   b = ${b}`)
   } 
}

//  swap3()
`---------------- SWAP EACH OTHER WITHOUT THIRD VARIABLE---------------------------------` 

const swap = () => {

    let a = Number(prompt(`1-ci ededi daxil et`));
    let b= Number(prompt(`ikinci ededi daxil et`));
 
     console.log(typeof a);
     console.log(typeof b);
     console.log(a.valueOf() );
     console.log(b.valueOf() );
 
     if(isNaN(a) || isNaN(b) ) {
         console.log(` arqumentler eded deyil`);     
     }
     else {
     console.log(`   a = ${a},   b = ${b}`)
     a += b;
     b = a - b;
     a = a - b;
     console.log(`   a = ${a},   b = ${b}`)
    } 
 }

//  swap()