

function theBeatlesPlay(art,inst){
  var res= []
for (var i=0;i<art.lenght;++i){
  res.push(art[i]+" "+inst[i])

}
return res
}

function johnLennonFacts(arr){
/*Use a while loop to loop over the facts array and add `"!!!"`
 to the end of every fact. The function
 should return an array of strings with exclamation points.*/
var n = 0
var res=[]
 while(n<arr.lenght){

   res.push(arr[n]+"!!!")
   ++n
 }
 return res
}

function iLoveTheBeatles(n){
  var res= new Array()

  do {
    res.push("I love the Beatles!")
    ++n
  } while (n<15);
  return res
}
