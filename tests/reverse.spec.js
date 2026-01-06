// o/p is "a idnI evoLI"
let s = "I Love India";
let r=((((s.split("")).reverse()).join('')).split(" ")).join('')
let t=""
let w=0
for(let e of s){
    (e==" ")?(t=t+' '):(t=t+r[w])
}
console.log(t);