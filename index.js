
var ad=['po','pu']
var an=['ca','ca']
theBeatlesPlay(ad,an)
function theBeatlesPlay(art,inst){
  var res= new Array()
for (var i=0;i<art.lenght;++i){
  res.push(art[i]+" "+inst[i])
  console.log(art[i]+" "+inst[i]);
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

function johnLennonFacts(arr){
/*Use a while loop to loop over the facts array and add `"!!!"`
 to the end of every fact. The function
 should return an array of strings with exclamation points.*/
var n = 0
 while(n<arr.lenght){
   var old = arr[n]
   arr[n]= old + "!!!"
   ++n
 }
 return arr
}
