
var ad=document.querySelector('#name')
var password=document.querySelector('#password')
var send=document.querySelector('.send')
var giris=document.querySelector('.giris')
var h2=document.querySelector('h2')
var message=document.querySelector('textarea')
var manitor=document.querySelector('.manitor')
var users=[
    {
        name:"fidan",
        password:'fidan123'
    },
    {
        name:'cinare',
        password:"cinare123"
    },
    {
        name:'naile',
        password:'naile456'
    }
]


const firebaseConfig = {
    apiKey: "AIzaSyAPlWNZ3WsBsTeguSx2BCsHWsmSv2WYjpU",
    authDomain: "mesajsayti.firebaseapp.com",
    databaseURL: "https://mesajsayti-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mesajsayti",
    storageBucket: "mesajsayti.appspot.com",
    messagingSenderId: "428648803481",
    appId: "1:428648803481:web:809e8fa17142f39aa05c08"
  };
  firebase.initializeApp(firebaseConfig);
  var db = firebase.database().ref();

giris.onclick=function(){
 
    for(let i=0;i<users.length;i++)
    {
        if(users[i].name==ad.value||users[i].password==password.value)
        {
           h2.innerText=`Welcome our chat  site ${ad.value}`
        }
     }
}
send.onclick=function(){
   var txt=message.value
   db.set({
       mesaj:txt,
       insanAdi:ad.value
   })
   db.on('value',function(snapshot)
   {
      var obyekt=snapshot.val()
      if(obyekt==null||obyekt==undefined){

      }
      else{
         var p= document.createElement('p')
         p.innerText=`${ad.value}: ${obyekt.mesaj}`
         manitor.append(p)
      }
   })
 
}