#### mobile_el_gaucho_nyheter


This project extended for a three weeks time period at [Craft Academy](https://craftacademy.se). We built El Gaucho Mobile using  [Expo](https://expo.io),  [React Native](https://reactnative.dev)  and Ruby on Rails for the backend.

The API that supports this client can be found in [this Repo](https://github.com/mauroavellaneda/api_el_gaucho_nyheter.git)

#### The project

The project consisted in creating a mobile application where users can access to our news through the app using a popular authentication method

#### Learning Objectives


Learn about Agile methodologies (Scrum + XP - Software Craftsmanship)
Practice project collaboration - planning, organizing ideas and tasks, capturing requirements
Advanced project collaboration like onboarding new team members and joining a new team
Practice more advanced strategies for CI, CD, and DevOps
Practice more advanced rails concepts like Action Mailer, Active Storage, ActiveJob.

##### Setup

... get [Yarn](https://yarnpkg.com/)

```
yarn install
```

... You would need to install an [iOS](https://developer.apple.com/library/archive/documentation/IDEs/Conceptual/iOS_Simulator_Guide/GettingStartedwithiOSSimulator/GettingStartedwithiOSSimulator.html) or [Android](https://developer.android.com/studio/run/emulator) simulator.


### e2e tests done with 

- [Detox](https://github.com/wix/Detox)

### Mocking API

 - We use [mockserver](https://www.npmjs.com/package/mockserver) to mock the server responses.

##### Usage

in CLI

```
$  mockserver -p 3000 -m './e2e/mocks'
```

in test configuration: the mockServer is located in `e2e/mockServer.js`

```js
// start server
let server = mockServer.open(<port number>)
```

```js
// close server
mockServer.close(server);
```

### Authors

- [Mauro Avellaneda](https://github.com/mauroavellaneda)
- [Sara Lundkvist](https://github.com/Saralundkvist86/)
- [Emiliano Mainero](https://github.com/emiliano-ma)
- [Facundo Osores](https://github.com/FacundoOs)

### Acknowledgements

- Our co-students for their support.
- [Craft Academy](https://craftacademy.se) for the support


### License

We operate under the [MIT License](https://en.wikipedia.org/wiki/MIT_License).
