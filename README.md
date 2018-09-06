# React Lyric Finder

Lyric Finder app using the Musixmatch API. This app was developed with React 16.4.2 using the Context API

### Musixmatch API

In order the use the Musixmatch API:

- Register in the [Developers page](https://developer.musixmatch.com/plans)
- Get the API key
- Rename the .env.example file for .env
- Put your own API key

# Setting up DevOps

## Setting up [Travis CI](https://travis-ci.org/)

- Sign in with your Github Account
- Select your repository
- Create .travis.yml file in the repository

```
language: node_js
node_js:
  - "stable"
cache:
  directories:
  - node_modules # Cache node_modules for faster builds
script:
  - npm test
  - npm run build
```

- Push this changes and an automatic build will be kicked off

## Optional - Setting up auto deployment to GitHub Pages

- Create a [GitHub access token](https://github.com/settings/tokens/new) with **repo scope level**
- Once the token is generated, copy this value in the Travis CI Environment Variables Sections
- In Travis CI, go to you repo-
  - Go to More Options -> Setting
  - Create a new Environment Variable with the name the want.
- After that, add the deploy step to your .travis.yml file

```
language: node_js
node_js:
  - "stable"
cache:
  directories:
  - node_modules
script:
  - npm test
  - npm run build
deploy:
  provider: pages
  skip_cleanup: true
  github_token: $GITHUB_TOKEN
  local_dir: build
  on:
    branch: master
```

- In the package.json file set a "homepage" in order to make the app know what it's URL will be

```
{
  "name": "react-lyrics-search",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://your_github_username.github.io/react-lyrics-seacrh/",
  "dependencies": {
    "axios": "^0.18.0",
    "react": "^16.4.2",
    "react-dom": "^16.4.2",
    "react-router-dom": "^4.3.1",
    "react-scripts": "1.1.5"
  },
  .......
}
```

- Commit and push these changes

## Installing Enzyme

```
npm install --save-dev enzyme
npm install --save-dev enzyme-adapter-react-16
```

```
sdfdsfa
```

```
fasdfsd
```

##

##

##

##
