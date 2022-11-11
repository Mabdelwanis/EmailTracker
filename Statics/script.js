const URL = document.URL

function getNewToken() {
  fetch(URL + "/api/NewToken").then((resp)=>{ return resp.json() }).then((json)=>{
    document.getElementById("imageurl").innerText = `Image URL : ${URL}image/?token=${json.token}`;
    document.getElementById("tokenvalue").innerText = `Token : ${json.token}`
})

}


function getInfo() {

  document.getElementById("info0").innerText = null
  document.getElementById("info1").innerText = null
  document.getElementById("info2").innerText = null
  document.getElementById("info3").innerText = null

  let key = document.getElementById("token").value
  fetch(`${URL}/api/GetInfo?token=${key}`).then(
    (resp) => {
      return resp.json()
    }
  ).then(
    (j) => {
      document.getElementById('fs').removeAttribute('hidden');
      if (j.Ok || j.Ok == null) {
        document.getElementById("info0").innerText = `IP Address: ${j.ipaddr}`
        document.getElementById("info1").innerText = `User Agent: ${j.useragent}`
        document.getElementById("info2").innerText = `Device: \n${j.deviceinfo}`
        document.getElementById("info3").innerText = `Geo Location:\n(Information provided by ip-api.com)\n${j.GeoLocation}`
      }else {
        document.getElementById("info0").innerText = j.Error;
      }

    }
  )

}
