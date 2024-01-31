import { select, Separator } from '@inquirer/prompts';

export async function look(instance, state) {
  let item = await select({
    message: 'What are you looking at?',
    choices: instance.look
  });

  //Check if item is a function or a string
  if (typeof item === 'function') {
    //If item is a function, execute it
    console.log(item(state));
  } else if (typeof item === 'string') {
    //If item is a string, log it directly
    console.log(item);
  } else {
    console.log("Invalid selection.");
  }
}

export async function go(instance, state) {
  let movement = await select({
    message: 'Where are you going',
    choices: instance.go
  })

  console.log(movement.travel_text);

  state.currentRoom = movement.dest;
}

export async function handleAction(action, instance, state) {
  switch (action) {
    case 'look':
      await look(instance, state);
      break;
    case 'go':
      await go(instance, state);
      break;
    default:
      console.error('unknown action: ' + action);
  }
}

export function addItemToInventory(item, state) {
  state.inventory.push(item);
  console.log(`${item.name} was added to your inventory.`);
}

export async function viewInventory(state) {
  console.log("Inventory:");
  state.inventory.forEach(item => console.log(item.name));
}

export let actionList = [
  {
    name: 'Look',
    value: 'look',
  },
  {
    name: 'Go',
    value: 'go',
  },
  {
    name: 'View Inventory',
    value: 'inventory',
  },
];