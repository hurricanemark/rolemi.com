function getProjectDetail(projTitle){
  fetch('../PrjPremises.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data){
      appendData(data);
    })
    .catch(function (err){
      console.log('error: ' + err);
    });
  function appendData(data) {
    var mainContainer = document.getElementById("prject-detail");
    for (var i=0; i < data.length; i++) {
      var iframediv = document.createElement("div");
      var segmentHTML = "";
      if (data[i].projectTitle === projTitle) {
        segmentHTML = '';
        segmentHTML = '<ul><strong>Project# ' + i
                  + '</strong></ul><li>Title: <span style="color:#FF0000">' + data[i].projectTitle + '</span><br />'
                  + '</li><li>URL: ' + data[i].projectUrl + '<br />'
                  + '</li><li>Catgories: ' + data[i].categories + '<br />'
                  + '</li><li>Description: ' + data[i].description + '<br />'
                  + '</li><li>Objective: ' + data[i].objective + '<br />'
                  + '</li><li>User story: ' + data[i].userStory + '<br /'
                  + '</li><li>Hints: ' + data[i].hints + '</br />'
                  + '</li><li>Notes: ' + data[i].notes + '<br />'
                  + '</li><li>Status: ' + data[i].status + '<br />'
                  + '</li><li>Developers: ' + data[i].engineers + '</li>';
                  
      }
      if (segmentHTML !== "") {
        document.getElementById("prject-detail").innerHTML = "";
        iframediv.innerHTML =segmentHTML;
        mainContainer.appendChild(iframediv);
      }
    }
  }
}
getProjectDetail();