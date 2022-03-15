# Nx Workspace

## App 

### sync

Running the sync command will update the native platform dependencies and copy a build of your frontend project to the Capacitor project:

`nx run app:sync:ios`
`nx run app:sync:android`

### open

Finally, you can open the native platform in it's respective IDE:

`nx run app:open:ios`
`nx run app:open:android`

### dev server

Finally, you can open the native platform in it's respective IDE:

`nx serve app`

### commit

Must be one of the following:

build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
ci: Changes to our CI configuration files and scripts (examples: CircleCi, SauceLabs)
docs: Documentation only changes
feat: A new feature
fix: A bug fix
perf: A code change that improves performance
refactor: A code change that neither fixes a bug nor adds a feature
test: Adding missing tests or correcting existing tests
