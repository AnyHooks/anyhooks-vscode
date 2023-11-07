const vscode = require('vscode');
const { exec } = require('child_process');

function activate(context) {
  let disposable = vscode.workspace.onDidChangeTextDocument(event => {
    if (event.contentChanges.length > 0) {
      // Assuming you have a bash script at the root of your project named 'script.sh'
      exec('bash ./commit-msg', (err, stdout, stderr) => {
        if (err) {
          // Handle error case
          console.error(`Execution error: ${err}`);
          return;
        }
        // Log the script output
        console.log(`stdout: ${stdout}`);
        if (stderr) {
          console.error(`stderr: ${stderr}`);
        }
      });
    }
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
