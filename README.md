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

- Before push this file to the repository. The API key must be configured in Travis CI:
  - In Travis CI, go to More Options -> Settings
  - In Environment Variables, set your Musixmatch API key
- Push this changes and an automatic build will be kicked off

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
