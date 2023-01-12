


// ----------------- SWAP EACH OTHER WITH THIRD VARIABLE----------------------------------- ` 
 

const swap3 = () => {

   let a = Number(prompt(`1-ci ededi daxil et`));
   let b= Number(prompt(`ikinci ededi daxil et`));

    // console.log(typeof a);
    // console.log(typeof b);
    // console.log(a.valueOf() );
    // console.log(b.valueOf() );

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


// ---------------- SWAP EACH OTHER WITHOUT THIRD VARIABLE--------------------------------- 

const swap = () => {

    let a = Number(prompt(`1-ci ededi daxil et`));
    let b= Number(prompt(`ikinci ededi daxil et`));
 
    //  console.log(typeof a);
    //  console.log(typeof b);
    //  console.log(a.valueOf() );
    //  console.log(b.valueOf() );
 
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



// ---------------- STRING REVERSE---------------------------------




const wordReverse = () => {

    
let word =prompt("SOZ DAXIL ET");
console.log(`DAXIL EDILEN SOZ        ${word}`);

let wordArray = word.split("");
console.log(`SOZUN MASSIV SHEKLI     ${wordArray}`);

wordArray.reverse();
console.log(`CEVRILMISH MASSIV       ${wordArray}`);

let reversedWord = wordArray.join("");

// for(let i=0; i<wordArray.length; i++){
//     reversedWord += wordArray[i]
// }
console.log(`CEVRILMISH SOZ          ${reversedWord}`);

}

// wordReverse()




// ___________________ARRAY COMPARE__________________



const arrayCompare = () => {

    let string1 = prompt(`BIRINCI MASSIV:
    ELEMENTLER ARASINDA + ISHARESI QOY`);
    let string2 = prompt(`IKINCI MASSIV:
    ELEMENTLER ARASINDA + ISHARESI QOY`);
    
    console.log("DAXIL EDILEN SETIRLER")
    console.log(string1);
    console.log(string2);
    
    let array1 = string1.split("+");
    let array2 =string2.split("+");
    
    console.log("SETIRLERIN MASSIVE CHEVRILMESI")
    console.log(array1);
    console.log(array2);
    
    for(var i=0;i<array1.length;i++){
        array1[i] = Number(array1[i]);   
    }
    for(var i=0;i<array2.length;i++){
        array2[i] = Number(array2[i]);
    }
    
    console.log("SETIRLERIN NUMBER TIPINE DEYISHDIRILMESI")
    console.log(array1);
    console.log(array2);
    
    for(var i=0;i<array1.length;i++){
        if(isNaN(array1[i])||array1[i] == ""){
            array1.splice(i,1);
            i--;
        }
    }
    
    for(var i=0;i<array2.length;i++){
        if(isNaN(array2[i])||array2[i] == ""){
            array2.splice(i,1);
            i--;
        }
    }
    
    console.log("NAN VE EMPTY ELEMENTLERIN XARIC EDILMESI")
    console.log(array1);
    console.log(array2);
    
    let sameElementsArray = [];
    
    let len =0;
    
    array1.length <= array2.length ? len = array1.length : len = array2.length;
    
    
    
    
    for(var i = 0;i<array1.length; i++){
    
        for(var j=0;j<array2.length; j++){
    
            if(array1[i] == array2[j]){
                sameElementsArray.push(array1[i]);
                array1.splice(i,1);
                array2.splice(j,1)
                j = 0;
                i--;
            }
    
        }
    }
    
    
    console.log("BIRINCI MASSIVIN FERQLI ELEMENTLERI:   ",array1);
    console.log("IKINCI MASSIVIN FERQLI ELEMENTLERI:    ",array2);
    console.log("MASSIVLERIN ORTAQ ELEMENTLERI:         ",sameElementsArray);

}

// arrayCompare()