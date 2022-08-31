# ultimate snap example

cd into the repo, and run `nvm use`.

This will install and/or use the recommended NVM version from .nvmrc.

Run `yarn install && yarn build:clean && yarn serve`.

This first runs the commands needed to install dependencies.

If there is a dist/ folder, it is then cleaned before the build command is run.

Finally, the dapp is served on http://localhost:8080.

Your terminal window should now be serving the example snap locally. Time to see the functionality in action!
