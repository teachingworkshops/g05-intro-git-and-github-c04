import { select, Separator } from '@inquirer/prompts';
import rooms from './rooms.js';

export async function look(instance, state) {
  let item = await select({
    message: 'What are you looking at?',
    choices: [
      ...instance.look,
      new Separator(),
      { name: 'Cancel', value: 'cancel' }
    ]
  });

  if (item === 'cancel') return;

  //Check if item is a function or a string
  if (typeof item === 'function') {
    //If item is a function, execute it
    item(state);
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
    choices: [
      ...instance.go.filter(item => !item.hidden),
      new Separator(),
      { name: 'Cancel', value: 'cancel' }
    ]
  })

  if (movement === 'cancel') return false;

  console.log(movement.travel_text);

  state.currentRoom = movement.dest;

  if (typeof movement.action == 'function') {
    movement.action(state);
  }

  return true;
}

export function printDescription(instance, state) {
  if (!state.seenRooms[state.currentRoom] && instance.initialDescription != undefined) {
    console.log(instance.initialDescription);
  } else if (instance.description != undefined) {
    console.log(instance.description);
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