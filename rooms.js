let rooms = {
  startRoom: (state) => {
    if (state.startRoomInit == undefined) {
      console.log('You awaken in a forest clearing atop a pile of leaves')
      state.startRoomInit = true;
    }
    return {
      description: 'You are in a forest clearing with a pile of leaves in the middle',
      go: [
        {
          name: 'North',
          description: 'A passageway through the forest',
          value: {
            dest: 'shrine',
            travel_text: 'you walk through the passageway'
          }
        }
      ],
      look: [
        {
          name: 'around',
          value: 'You are in a forest clearing with a pile of leaves in the middle'
        },
        {
          name: 'Leaf Pile',
          value: 'A pile of leaves stands in the middle of the clearing. There is a you shaped dent.'
        }
      ]
    };
  },
  shrine: (state) => {
    console.log('enter shrine')

    return {
      description: 'wow so cool',
      go: [
        {
          name: 'South',
          description: 'a passageway back',
          value: {
            dest: 'firstRoom',
            travel_text: 'you return to the clearing where you awakened'
          }
        }
      ],
    }
  }
};

export default rooms;
