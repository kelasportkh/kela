var firebaseConfig = {
  apiKey: "AIzaSyBwUY_IPgSg9j-xCYgn7gpelPQQOA5z7YA",
  authDomain: "kelacontactform.firebaseapp.com",
  projectId: "kelacontactform",
  storageBucket: "kelacontactform.appspot.com",
  messagingSenderId: "111564811137",
  appId: "1:111564811137:web:08a28e48caa050a4365680",
};

//Initialize Firebase 
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("FormContactUs")

//Get Submit Form
let submitButton = document.getElementById('submit')

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()

  //Get Form Values
  let Name = document.getElementById('name').value
  let Email = document.getElementById('email').value
  let Phone = document.getElementById('phone').value
  let Message = document.getElementById('message').value


  //Save Form Data To Firebase
  db.doc().set({
    name: Name,
    email: Email,
    phone: Phone,
    message: Message,
    date: new Date(),
  }).then(() => {
    console.log("Data saved")
  }).catch((error) => {
    console.log(error)
  })

  if(isKhPage) {
    alert("Form submitted successfully! KH")
  } else {
    alert("Form submitted successfully!")
  }
})

const bu_db = firestore.collection("BecomeUser")

let buSubmitButton = document.getElementById('bu-submit')

buSubmitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()

  //Get Form Values
  let bu_email = document.getElementById('bu-email').value


  //Save Form Data To Firebase
  bu_db.doc().set({
    email: bu_email,
    date: new Date(),
  }).then(() => {
    console.log("Data saved")
  }).catch((error) => {
    console.log(error)
  })

  if(isKhPage) {
    alert("Form submitted successfully! KH")
  } else {
    alert("Form submitted successfully!")
  }
})

let isKhPage = document.getElementById('kh-page') ? true : false

