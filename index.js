var Command = require('./command');

function handleResult(err) {
  if (err) {
    console.log("Something went wrong!");
  } else {
    console.log("Looks like things work! Woot!")
  }
}

if (Command.getOperation() === 'find') {
  Command.find(handleResult)
} else if (Command.getOperation() === 'add') {
  Command.add(handleResult)
} else {
  console.log('Method does not exist! Try Find or Add please.');
}
