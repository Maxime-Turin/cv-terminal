// TODO : Terminal-caret like

const app = {
  init() {
    app.makeTerminalInput();
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

  // Typing function : Move the caret when typing
};

// TODO : Instruction when submit

// Put the input text in a div right after firstname@lastname

// Find what to print in a printList (json) => function printHandler(instruction) ?

// Draw a new firstname@lastname > input

document.addEventListener('DOMContentLoaded', app.init);
