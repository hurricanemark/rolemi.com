// //import { readFileSync } from 'fs';
// const datafile = require("../static/PrjPremises.json");
// const fs = require('fs');
// let rawdata = fs.readFile(datafile);
// let prjAssignments = JSON.parse(rawdata);
// const obj = JSON.parse(rawdata, function (key, value) {
//     if (key == "projectTitle" && value == 'A National Contiguity with a Force Directed Graph') {
//         const outstr = key + '=' + value;
//       console.log(value);
//     } 
    
// });
// for (let i = 0; i < prjAssignments.length; i++) {
//     console.log(prjAssignments[i].projectTitle);
//     const x = "";
//     for (let j in prjAssignments.userStory) {
//         x += prjAssignments.story[j];
//     }
//     console.log(x);
// }

// console.log(prjAssignments[2].projectTitle);




const fs = require("fs");
function jsonReader(filePath, cb) {
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }
    try {
      const object = JSON.parse(fileData);
      return cb && cb(null, object);
    } catch (err) {
      return cb && cb(err);
    }
  });
}

jsonReader("../static/PrjPremises.json", (err, project) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(project[0]); 
});