const commandDetails = [
  {
    command: 'help',
    html: '',
  },
  {
    command: 'cv',
    html: '',
  },
  {
    command: 'à-propos',
    html: '',
  },
  {
    command: 'projects',
    html: '',
  },
  {
    command: 'theme',
    html: '',
  },
  {
    command: 'clear',
    html: '',
  },
  {
    command: 'rainbow',
    html: '',
  },
  {
    command: 'konamicode',
    html: '',
  },
  {
    command: 'music',
    html: '',
  },
];

const app = {
  caractCount: 0,

  init() {
    app.makeTerminalInput();
    app.listeners();
  },

  // Draw 'maxime@turin' -> The input caret and the input
  makeTerminalInput() {
    // Query terminalBody
    const terminalBody = document.querySelector('.terminal__body');
    // Create and place 'name'
    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = 'maxime@turin';
    terminalBody.appendChild(name);
    // Create and place a div used for the next placements (see css)
    const commandInputPlacement = document.createElement('div');
    commandInputPlacement.classList.add('command-input-placement');
    terminalBody.appendChild(commandInputPlacement);
    // Create and place the input caret
    const commandInputCaret = document.createElement('div');
    commandInputCaret.classList.add('command-input-caret');
    commandInputCaret.textContent = '_';
    commandInputPlacement.appendChild(commandInputCaret);
    // Create and place the command input
    const commandInput = document.createElement('input');
    commandInput.setAttribute('type', 'text');
    commandInput.classList.add('command-input');
    commandInputPlacement.appendChild(commandInput);
  },
  // Change caret function after focus => change terminal caret style after focus
  makeCaretFocused() {
    document.querySelector('.command-input').focus();
  },

  // Typing function : Move the caret when typing
  typingInCommandInput(event) {
    // TODO : add exeptions (suppr, maj, tab, etc)
    // Get caret div
    const caretPosition = document.querySelector('.command-input-caret');
    const inputValue = document.querySelector('.command-input').value;
    console.log(event.keyCode);
    // Handle backspace
    if (event.keyCode === 13) {
      app.commandInstructionHandler(inputValue);
    } else if (event.code === 'Backspace' && app.caractCount > 0) {
      app.caractCount -= 1;
      caretPosition.style.transform = `translateX(${(app.caractCount * 0.6).toString()}rem)`;
    } else if (event.code === 'Backspace' && app.caractCount === 0) {
      app.caractCount = 0;
    } else {
      // Move when typing
      app.caractCount += 1;
      caretPosition.style.transform = `translateX(${(app.caractCount * 0.6).toString()}rem)`;
    }
  },

  // Read the input and handle commands
  commandInstructionHandler(inputValue) {
    // remove spaces from the input value
    const command = inputValue.split(' ').join('');
    console.log(command);
    console.log(commandDetails);
    // Put the input text in a div right after firstname@lastname
    // delete command-input & command-input-caret
    // draw with inputValue

    // Find what to print in a printList (json) + default error and help
    // Draw a new firstname@lastname > input
  },

  // Events list
  listeners() {
    // Event listener to add focus on terminal input
    document.querySelector('.terminal__body').addEventListener('click', app.makeCaretFocused);
    // Event listener when typing in the terminal input
    document.querySelector('.command-input').addEventListener('keydown', app.typingInCommandInput);
  },
};

// TODO : Instruction when submit

document.addEventListener('DOMContentLoaded', app.init);
