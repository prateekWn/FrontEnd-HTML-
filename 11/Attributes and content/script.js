let o = document.getElementsByClassName("para")[1]

// console.log(o) // this will run in console perfectly!!

// console.log(o.innerText)
// console.log(o.outerHTML)
// console.log(o.innerHTML)

// o.innerText = "This is a new property to change the text inside this index one class selector para";
// o.innerText = " hello this <b>bold</b> text"; //with this property it wont make bold tag it will convert tag into string 
// o.innerHTML = "Hello this <b>bold</b> text"; // but with this property it will cnvert the tag to tag only!!

// o.getAttribute("class"); // => para
// o.getAttribute("id"); // => p2
// o.getAttribute("contenteditable" , true); 
/*
by this we can add attributes to the elements and "contenteditable" helps you to write in the html page dirctly;
*/ 

// o.getAttribute("spellcheck" , false);
/*
by this we can add attributes to the elements and "spellcheck" helps you to write wrong words when its false;
*/ 

let i = document.getElementById("inpbox");

/*
for input boxes we if we want to check what is writen we have to use "value" rather than "innerText"
*/