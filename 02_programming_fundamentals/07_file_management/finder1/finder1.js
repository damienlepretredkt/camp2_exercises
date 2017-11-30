const fs = require('fs');
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const defaultDirectoryList = [".."];

// lister un répertoire avec un repertoire parent en param
function listDir(directory) {
  const directoryList = [".."];
  fs.readdir(
    directory,
    (err, files) => {
      if (err) {
        console.log(err);
      } else {
      files
        .sort(
          function(file1, file2) {
            return returnType(directory, file1) - returnType(directory, file2);
          })
        .forEach((element) => directoryList.push(element));
      }
      directoryList
        .map((element, index, tab) => {
          return index.toString()
            + ". "
            + element
            + (fs.statSync(element).isDirectory() ? "/" : "")
          }
        )
        .forEach((element) => console.log(element));

      requestForAction(directoryList);
    }
  )
}

// poser une question pour le choix de l'action
function requestForAction(directoryList) {
  reader.question(
    "Choose a number> \n",
    function(answer) {
      const answerAsInteger = Number(answer);
      if (answerAsInteger === 0) {
        console.log("Implementer le parent")
        main();

      } else if (fs.statSync(directoryList[answerAsInteger]).isDirectory()) {
        pwd(
          (error, resolvedPath) => {
            if (error) {
              console.log("unable to find current directory")
            } else {
              // console.log(resolvedPath + "/" + directoryList[answerAsInteger]);
              listDir(resolvedPath + "/" + directoryList[answerAsInteger]);
            }
          }
        )

      } else {
        fs.readFile("./" + directoryList[answerAsInteger], (error, data) => {
          if (error) {
            console.warn(error);
          } else {
            console.log(" \n ~~~~~Diplaying " + directoryList[answerAsInteger] + "\n");
            console.log(data.toString());
            console.log(" \n ~~~~~End display \n");
          }
        });
        pwd(
          (error, resolvedPath) => {
            if (error) {
              console.log("unable to find current directory")
            } else {
              // console.log(resolvedPath + "/" + directoryList[answerAsInteger]);
              listDir(resolvedPath);
            }
          }
        )
      }

    }
  )
}


// tester si c'est un fichier ou un repertoire
function returnType(directory, file) {
  const fileLocation = directory + "/" + file;
  if (fs.statSync(fileLocation).isDirectory()) {
    return 1;
  } else {
    return 2;
  }
}

// fonction pour afficher le contenu d'un répertoire

function pwd(callback) {
  fs.realpath(
    ".",
    (error, resolvedPath) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, resolvedPath);
      }
    }
  )
}


function main() {
  pwd(
    (error, resolvedPath) => {
      if (error) {
        console.log("unable to find current directory")
      } else {
        listDir(resolvedPath);
      }
    }
  )

}


const launch = main();
