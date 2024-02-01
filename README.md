# Group C04 Adventure Game
Choose your own text adventure game using the arrow keys to navigate throughout the game. 

## Created By
Mason Osborn, Brandan Nguyen, Oleg Zakovyrkin, Gloria Solovey

## Running
1. Install [node.js](https://nodejs.org/)
2. Clone the repository
3. run npm install in the repo folder to install the dependencies
4. run npm start to run the program
### Using deno
1. Install [deno](https://deno.com/)
2. Clone the repository
3. run `deno run --allow-read --allow-sys=osRelease index.js`

## Compiling
Because deno allows for compiling executables, we can instead run `deno compile` with the same flags, and create a single file executable. The script [build_release.sh](build_release.sh) uses the `--target` flag to compile the program for both windows and linux.
