/* get visitor counter */
function websiteVisits(response) {
    document.querySelector("#visits").textContent = response.value;
}

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
            // alert(data[i].demo);
            if (data[i].projectTitle === titleName) {
                segmentHTML = '<br \><ul class="dashed"><span style="color:green"><em>' + data[i].projectTitle + '</em></span></ul>&emsp;&emsp; <hr><br \>'
                            + '&emsp; &#8211; Project Url: ' + data[i].projectUrl + '<br \>'
                            + '&emsp; &#8211; Description: ' + data[i].description  + '<br \>'
                            + '&emsp; &#8211; Objective: ' + data[i].objective + '<br \>'
                            + '&emsp; &#8211; UserStory: ' + data[i].userStory  + '<br \>'
                            + '&emsp; &#8211; Hints: ' + data[i].hints + '<br \>'
                            + '&emsp; &#8211; Notes: ' + data[i].note  + '<br \>'
                            + '&emsp; &#8211; Status: ' + data[i].status + '<br \>'
                            + '&emsp; &#8211; Engineers: ' + data[i].engineers  + '<br \>'
                            + '&emsp; &#8211; Categories: ' + data[i].categories + '</br \><br \>'
                            + '&emsp; &#8211; Demo: ' + data[i].demo  + '<br \></li>';
            }
            if (segmentHTML !== "") {
                //console.log(segmentHTML);
                document.getElementById("prject-detail").innerHTML = "";
                div.innerHTML = segmentHTML;
                mainContainer.appendChild(div);
            }
        }
    }
}

/*
                segmentHTML = '<ul class="dashed"><strong>Project# ' + i 
                            + '</strong></ul><li>&#8211; Project Title: <span style="color:#ff00AA">' + data[i].projectTitle + '</span><br \>'
                            + '&#8211; Project Url: ' + data[i].projectUrl + '<br \>'
                            + '&#8211; Description: ' + data[i].description  + '<br \>'
                            + '&#8211; Objective: ' + data[i].objective + '<br \>'
                            + '&#8211; UserStory: ' + data[i].userStory  + '<br \>'
                            + '&#8211; Hints: ' + data[i].hints + '<br \>'
                            + '&#8211; Notes: ' + data[i].note  + '<br \>'
                            + '&#8211; Demo: ' + data[i].demo  + '<br \>'
                            + '&#8211; Status: ' + data[i].status + '<br \>'
                            + '&#8211; Engineers: ' + data[i].engineers  + '<br \>'
                            + '&#8211; Categories: ' + data[i].categories + '</li>';

*/
getProjectDetailPureJS('Wiki Search');
