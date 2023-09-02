import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js"
import { getDatabase, ref, child, set } 
from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js"

const firebaseConfig = {
   databaseURL: "https://playgroundcopycat-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const dbref = ref(database, 'Carts')


const passportNumberEl = document.getElementById('passport')
const stickerNumberEl = document.getElementById('sticker')
const refNumberEl = document.getElementById('refNumber')

const saveDataEl = document.getElementById('saveData')


saveDataEl.addEventListener('click', function (){
    set(dbref, { 
        applicationStatus : "APPROVED", 
        passportNumber: passportNumberEl.value,
        stickerNumber: stickerNumberEl.value,
        referenceNumber: refNumberEl.value,
        placeOfIssue: "Dhaka,Bangladesh",
        visaValidity: "31 Aug2023until 30 Nov2023",
        visaStatus: "VALID"
    })
})
