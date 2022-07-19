/* pure javascript */
function getProjectDetailPureJS(titleName){
    let object;
    let httpRequest = new XMLHttpRequest(); // asynchronous request
    httpRequest.open("GET", "./data/prjPremises.json", true);
    httpRequest.send();
    httpRequest.addEventListener("readystatechange", function() {
        if (this.readyState === this.DONE) {
            // when the request has completed
            object = JSON.parse(this.response);
            //console.log(object);
            appendData(object);
        }
    });

    function appendData(data) {
        let mainContainer = document.getElementById("prject-detail");
        
        for (let i = 0; i < data.length; i++) {
            let div = document.createElement("div");
            let segmentHTML = "";
            if (data[i].projectTitle === titleName) {
                segmentHTML = '<ul><strong>Project# ' + i 
                            + '</strong></ul><li>projectTitle: <span style="color:#ff00AA">' + data[i].projectTitle + '</span><br \>'
                            + '</li><li>projectUrl: ' + data[i].projectUrl + '<br \>'
                            + '</li><li>description: ' + data[i].description  + '<br \>'
                            + '</li><li>objective: ' + data[i].objective + '<br \>'
                            + '</li><li>UserStory: ' + data[i].userStory  + '<br \>'
                            + '</li><li>Hints: ' + data[i].hints + '<br \>'
                            + '</li><li>notes: ' + data[i].note  + '<br \>'
                            + '</li><li>status: ' + data[i].status + '<br \>'
                            + '</li><li>engineers: ' + data[i].engineers  + '<br \>'
                            + '</li><li>categories: ' + data[i].categories + '</li>';
            }
            if (segmentHTML !== "") {
                console.log(segmentHTML);
                document.getElementById("prject-detail").innerHTML = "";
                div.innerHTML = segmentHTML;
                mainContainer.appendChild(div);
            }
        }
    }
}


getProjectDetail('Image Search Abstraction Layer');
