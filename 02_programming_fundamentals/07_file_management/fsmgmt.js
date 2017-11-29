const fs = require('fs');


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

function deleteFile(fileLocation, callback) {
  if (fileLocation.startsWith("./")) {
    fs.unlink(
      fileLocation,
      (error) => {
        if (error) {
          callback(`unable to remove ${fileLocation} because : ${error}`, null);
        } else {
          callback(null, `${fileLocation} has been successfully removed`);

        }
      }
    );
  } else {
  console.warn("Be carefull, you tried to remove file that is not in your current directory");
  }
}

function rm_for_win () {
  // preconditions
  const fileLocation = "./file_to_remove.txt";
  const fileContent = "file to remove";
  pwd(
    (error, currentDirectory) => {
      fs.writeFile(
        fileLocation,
        fileContent,
        (error) => {
          if (error) {
            console.warn(error);
          } else {
            console.log(`You're in directory : ${currentDirectory}`)
            console.log(` We gonna remove : ${fileLocation} with content ${fileContent}`)
            deleteFile(
              fileLocation,
              (error, success) => {
                if (error) {
                  console.warn(error);
                } else {
                  console.log(success);
                }
              }
            );
          }
        }
      );
    }
  );
}

function copyPaste(sourceFilename, targetFilename) {

  fs.readFile(sourceFilename, (error, data) => {
    if (error) {
      console.warn(error);
    } else {
      fs.writeFile(
        targetFilename,
        data,
        (error) => {
          if (error) {
            console.warn(`unable to paste file because : ${error}`);
          } else {
            console.log(`Copy ${targetFilename} success`);
          }
        }
      );
    }
  });
}

function cutPaste(sourceFilename, targetFilename) {
  fs.readFile(sourceFilename, (error, data) => {
    if (error) {
      console.warn(error);
    } else {
      fs.writeFile(
        targetFilename,
        data,
        (error) => {
          if (error) {
            console.warn(`unable to write new file because : ${error}`);
          } else {
            console.log(`Copy ${targetFilename} success, start cutting`);
            deleteFile(
              sourceFilename,
              (error, success) => {
                if (error) {
                  console.warn(error);
                } else {
                  console.log(success);
                }
              }
            );
          }
        }
      );
    }
  });
}

function touch(fileLocation) {
  fs.writeFile(
    fileLocation,
    "",
    (error) => {
      if(error) {
        console.warn(error);
      } else {
        console.log(`${fileLocation} created!`)
      }
    }
  )
}

const launchProgram = touch("./touchedfile.txt");

// const launchProgram = cutPaste("./file_to_cut.txt", "./cutdir2/file_copied.txt");
// const laucnhProgram = rm_for_win();
// const launchProgram = copyPaste("./file_to_copy.txt", "./copydir/file_copied.txt");
