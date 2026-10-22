
let podaci = "   Korisnik: Marija Petrovic | Email: MARIJA@QAmitra.com | Cena: $1250   "
let cist = podaci.trim()
console.log(cist.length)

console.log(cist.startsWith("Korisnik"))
console.log(cist.includes("Email"))

let delovi = cist.split("|")
console.log(delovi)

let email = delovi[1].replace("Email:", "").toLowerCase()
console.log(email)

let domain = email.split("@")[1].split(".")[0]
console.log(domain)




