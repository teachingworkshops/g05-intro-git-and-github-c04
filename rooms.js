import { addItemToInventory } from './actions.js';
import loot from './loot.js';

let rooms = {
  /*
  roomTemp: (state) => {
    console.log('') //Adds a spacing to make the text easier to read
    return {
      description: '',
      go: [
        {
          name: 'East',
          description: '',
          value: {
            dest: '',
            travel_text: ''
          }
        },
        {
          name: 'West',
          description: '',
          value: {
            dest: '',
            travel_text: ''
          }
        },
        {
          name: 'North',
          description: '',
          value: {
            dest: '',
            travel_text: ''
          }
        },
        {
          name: 'South',
          description: '',
          value: {
            dest: '',
            travel_text: ''
          }
        }
      ],
      look: [
        {
          name: 'Around',
          value: ''
        }
      ]
    }
  }*/

  startRoom: (state) => {
    if (state.startRoomInit == undefined) {
      console.log('You awaken in a forest clearing atop a pile of leaves.')
      state.startRoomInit = true;
    }
    console.log('') //Adds a spacing to make the text easier to read
    return {
      description: 'You are in a forest clearing with a pile of leaves in the middle', //does description ever get announced?
      go: [
        {
          name: 'North',
          description: 'A passageway through the forest heading North. You think you see a structure.',
          value: {
            dest: 'room1',
            travel_text: 'You walk through the passageway and arrive in another small clearing with a curious structure at its center.'
          }
        },
        {
          name: 'South',
          description: 'A cave entrance to the South.',
          value: {
            dest: 'room2',
            travel_text: 'You walk into the mouth of the cave.'
          }
        },
        {
          name: 'East',
          description: 'A pathway leading East deeper into the forest',
          value: {
            dest: 'room4',
            travel_text: 'You walk on the pathway deeper into the forest.'
          }
        }
      ],
      look: [
        {
          name: 'Around',
          value: 'You look around the forest clearing you find yourself in. All that is here is the pile of leaves you awoke atop.'
        },
        {
          name: 'Leaf Pile',
          value: 'A pile of leaves stands in the middle of the clearing. There is a you shaped dent.'
        }
      ]
    };
  },

  room1: (state) => {
    console.log('') //Adds a spacing to make the text easier to read
    return {
      description: 'You are in a clearing with a forest shrine.',
      go: [
        {
          name: 'South',
          description: 'Return to the forest clearing you started in.',
          value: {
            dest: 'startRoom',
            travel_text: 'You return to the clearing where you awakened.'
          }
        }
      ],
      look: [
        {
          name: 'Around',
          value: 'You examine the clearing. A shrine sits in the center. Birds chirp and the wind blows through the leaves. You feel at peace.'
        },
        {
          name: 'Shrine',
          value: 'You examine the shrine. It is overgrown with foliage but otherwise undisturbed.'
        }
      ]
    }
  },

  room2: (state) => {
    console.log('') //Adds a spacing to make the text easier to read
    return {
      description: 'You find yourself in a cave.',
      go: [
        {
          name: 'North',
          description: 'Return to the forest clearing you started in.',
          value: {
            dest: 'startRoom',
            travel_text: 'You return to the clearing where you awakened.'
          }
        },
        {
          name: 'West',
          description: 'Deeper into the cave.',
          value: {
            dest: 'room3',
            travel_text: 'You stumble deep into the cave.'
          }
        }
      ],
      look: [
        {
          name: 'Around',
          value: 'You examine the cave. It is dark and damp. It looks like it goes deeper in.'
        }
      ]
    }
  },

  room3: (state) => {
    console.log('') //Adds a spacing to make the text easier to read
    return {
      description: 'You are deeper into the cave. You find a torch lit room',
      go: [
        {
          name: 'East',
          description: 'Return to the mouth of the cave.',
          value: {
            dest: 'room2',
            travel_text: 'You return to the mouth of the cave.'
          }
        }
      ],
      look: [
        {
          name: 'Around',
          value: 'You are in a torch lit room! A small chest sits at the center.'
        },
        {
          name: 'Chest',
          value: () => {
            console.log('The chest is unlocked. You found gold inside! ')
            addItemToInventory(loot.gold, state);
          } 
        }
      ]
    }
  },

  room4: (state) => {
    console.log('') //Adds a spacing to make the text easier to read
    return {
      description: 'You find yourself in a three way fork in the path.',
      go: [
        {
          name: 'East',
          description: 'A pathway deeper into the forest going East.', //Add a puzzle here!
          value: {
            dest: 'room8',
            travel_text: 'You go further East.'
          }
        },
        {
          name: 'West',
          description: 'Return to the forest clearing where you awoke.',
          value: {
            dest: 'startRoom',
            travel_text: 'You travel back to the forest clearing the way you came.'
          }
        },
        {
          name: 'North',
          description: 'A path leading North into a sunny field.',
          value: {
            dest: 'room5',
            travel_text: 'You move to the sunny field.'
          }
        }
      ],
      look: [
        {
          name: 'Around',
          value: 'The forest is dark and confusing. You see three paths that you can take.'
        }
      ]
    }
  },

  room5: (state) => {
    console.log('') //Adds a spacing to make the text easier to read
    return {
      description: 'A sunny field.',
      go: [
        {
          name: 'East',
          description: 'A small cottage rests on a nearby hill.',
          value: {
            dest: 'room7',
            travel_text: 'You begin walking towards the small cottage to the East.'
          }
        },
        {
          name: 'North',
          description: 'You see a bit to the North what looks like a windmill.',
          value: {
            dest: 'room6',
            travel_text: 'You walk towards the windmill to the North'
          }
        },
        {
          name: 'South',
          description: 'Return back the way you came to the three way crossroad.',
          value: {
            dest: 'room4',
            travel_text: 'You return the way you came back to the crossroad.'
          }
        }
      ],
      look: [
        {
          name: 'Around',
          value: 'The sun is high in the sky. The rolling grass pokes at your feet.'
        }
      ]
    }
  },

  room6: (state) => {
    console.log('') //Adds a spacing to make the text easier to read
    return {
      description: '',
      go: [
        {
          name: 'South',
          description: 'Return to the sunny field South.',
          value: {
            dest: 'room5',
            travel_text: 'You return back to the sunny field'
          }
        }
      ],
      look: [
        {
          name: 'Around',
          value: 'You find a farmer! He greats you with a smile.' //Add something here maybe?
        }
      ]
    }
  },

  room7: (state) => {
    console.log('') //Adds a spacing to make the text easier to read
    return {
      description: 'A cottage on a hill',
      go: [
        {
          name: 'West',
          description: 'Return back down the hill to the sunny field',
          value: {
            dest: 'room5',
            travel_text: 'You walk back down the hill the way you came.'
          }
        },
        {
          name: 'South',
          description: 'A witch offers a familiar to guide you closer to your destination.',
          value: {
            dest: 'room8',
            travel_text: 'You agree to the witchs terms and a small raven leads you South.'
          }
        }
      ],
      look: [
        {
          name: 'Around',
          value: 'You find yourself in the small cottage. A stinky broth is brewing over the fireplace. A witch appears before you and offers you a deal' //Add something here!
        }
      ]
    }
  },

  room8: (state) => {
    console.log('') //Adds a spacing to make the text easier to read
    return {
      description: 'You are in the main room of a castle!',
      go: [
        {
          name: 'East',
          description: 'A drawbridge leads to the East.',
          value: {
            dest: 'room13',
            travel_text: 'You run across the drawbridge to the East'
          }
        },
        {
          name: 'West',
          description: 'You find a door that leads back to the three way crossroad.',
          value: {
            dest: 'room4',
            travel_text: 'You return back to the three way crossroad.'
          }
        },
        {
          name: 'North',
          description: 'A cobblestone bridge leading North towards a small cottage',
          value: {
            dest: 'room7',
            travel_text: 'You walk across the bridge towards the cottage.'
          }
        },
        {
          name: 'South',
          description: 'A passage way deeper into the castle!',
          value: {
            dest: 'room9',
            travel_text: 'You begin exploring the castle.'
          }
        }
      ],
      look: [
        {
          name: 'Around',
          value: 'You find yourself in a huge castles main hall! The walls stretch higher than you can see.'
        }
      ]
    }
  },

  room9: (state) => {
    console.log('') //Adds a spacing to make the text easier to read
    return {
      description: '',
      go: [
        {
          name: 'West',
          description: 'A passgeway down into the depths of the Castle.',
          value: {
            dest: 'room12',
            travel_text: 'You travel down the passage deeper into the castle.'
          }
        },
        {
          name: 'North',
          description: 'Back to the main chambers of the castle.',
          value: {
            dest: 'room8',
            travel_text: 'You return back the way you came'
          }
        },
        {
          name: 'South',
          description: 'You feel a breeze from a staircase towards the South.',
          value: {
            dest: 'room10',
            travel_text: 'You walk up the staircase.'
          }
        }
      ],
      look: [
        {
          name: 'Around',
          value: 'You are in the armory of the castle!'
        }
      ]
    }
  },

  room10: (state) => {
    console.log('') //Adds a spacing to make the text easier to read
    return {
      description: 'The castle rampart',
      go: [
        {
          name: 'West',
          description: 'A staircase down towards a door',
          value: {
            dest: 'room11',
            travel_text: 'You move down from the castle rampart down towards the door and into the room.'
          }
        },
        {
          name: 'North',
          description: 'Staircase leading down towards the armory.',
          value: {
            dest: 'room9',
            travel_text: 'You move into the armory.'
          }
        }
      ],
      look: [
        {
          name: 'Around',
          value: 'You are on top of the castle ramparts! You are battered by the billowing winds and almost lose your balance.'
        },
      ]
    }
  },

  room11: (state) => {
    console.log('') //Adds a spacing to make the text easier to read
    return {
      description: 'A small office for the castle commander.',
      go: [
        {
          name: 'East',
          description: 'A stairwell towards the ramparts of the castle',
          value: {
            dest: 'room10',
            travel_text: 'You move to the ramparts of the castle.'
          }
        },
        {
          name: 'North',
          description: 'A stairwell that leads into the depths of the castle.',
          value: {
            dest: 'room12',
            travel_text: 'You move down the stairs deeper into the castle.'
          }
        }
      ],
      look: [
        {
          name: 'Around',
          value: 'You find yourself in the commanders quarters. He greets you with a stern voice.'
        }
      ]
    }
  },

  room12: (state) => {
    console.log('') //Adds a spacing to make the text easier to read
    return {
      description: '',
      go: [
        {
          name: 'East',
          description: 'A stairwell leading up towards the armory.',
          value: {
            dest: 'room9',
            travel_text: 'You travel up a stairwell up into the armory'
          }
        },
        {
          name: 'South',
          description: 'A stairwell leading up towards a door.',
          value: {
            dest: 'room11',
            travel_text: 'You travel up the stairs and through the door into the commanders quarters.'
          }
        }
      ],
      look: [
        {
          name: 'Around',
          value: 'A prison dungeon. The cells are currently empty.'
        }
      ]
    }
  },

  room13: (state) => {
    console.log('') //Adds a spacing to make the text easier to read
    return {
      description: 'A small road.',
      go: [
        {
          name: 'West',
          description: 'Back across the drawbridge into the castle.',
          value: {
            dest: 'room8',
            travel_text: 'You cross the drawbridge back into the main hall of the castle.'
          }
        },
        {
          name: 'North',
          description: 'A caravan looks like it is camping to the North.',
          value: {
            dest: 'room14',
            travel_text: 'You walk towards the caravan'
          }
        }
      ],
      look: [
        {
          name: 'Around',
          value: 'You find yourself on a well traveled road. Horse and cart marks are scattered throughout the dirt.'
        }
      ]
    }
  },

  room14: (state) => {
    console.log('') //Adds a spacing to make the text easier to read
    return {
      description: '',
      go: [
        {
          name: 'South',
          description: 'Return towards the road path.',
          value: {
            dest: 'room13',
            travel_text: 'You return the way you came back towards the start of the road path.'
          }
        }
      ],
      look: [
        {
          name: 'Around',
          value: () => handleBandits(state) //Handles bandit attack.
        }
      ]
    }
  }

};

//Bandits attack. Removes gold from inventory if gold > 0
function handleBandits(state) {
  const goldIndex = state.inventory.findIndex(item => item.name === 'Gold');
  if (goldIndex !== -1) {
    state.inventory.splice(goldIndex, 1);
    console.log("You give one gold to the bandits. They let you go.");
  } else {
    console.log("You have no gold to give. The bandits attack!");
    console.log("Game Over");
    process.exit();
  }
}

export default rooms;