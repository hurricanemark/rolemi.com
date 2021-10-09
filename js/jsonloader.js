function getProjectDetail(projTitle){
  fetch("../static/PrjPremises.json")
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
                  + '</strong></ul><font face="arial" color="#DDAA42">Title</font>: <span style="color:#FF00AA">' + data[i].projectTitle + '</span><br /><br />'
                  + '<font face="arial" color="#8ebf42">URL:</font> ' + data[i].projectUrl + '<br />'
                  + '<font face="arial" color="#8ebf42">Catgories:</font> ' + data[i].categories + '<br />'
                  + '<font face="arial" color="#8ebf42">Description:</font> ' + data[i].description + '<br />'
                  + '<font face="arial" color="#8ebf42">Objective:</font> ' + data[i].objective + '<br />'
                  + '<font face="arial" color="#8ebf42">User story:</font> ' + data[i].userStory + '<br />'
                  + '<font face="arial" color="#8ebf42">Hints:</font> ' + data[i].hints + '</br />'
                  + '<font face="arial" color="#8ebf42">Notes:</font> ' + data[i].notes + '<br />'
                  + '<font face="arial" color="#8ebf42">Status:</font> ' + data[i].status + '<br />'
                  + '<font face="arial" color="#8ebf42">Developers:</font> ' + data[i].engineers;
                  
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