  
  
  
  
  
#  LSD Project Frontend | Database Management
  
  
_Large System Development, fall 2020_
  
**Stephan Duelund Djurhuus**
  
![Node.js CI](https://github.com/Fraqs/LSD-Project.Backend/workflows/Node.js%20CI/badge.svg )
  
![cover image](/assets/cover.png?0.45432489066555104 )  
  
##  Content
  
  
- [Components](/#components )
- [Setup](/#setup )
  - [Dependency Installation](/#dependency-installation )
- [Source Structure](/#source-structure )
- [Usage](/#usage )
  - [Testing](/#testing )
  
##  Components
  
  
-   [Backend](https://github.com/Fraqs/LSD-Project.Backend ), Handles Database Management.
-   [Frontend](https://github.com/Fraqs/LSD-Project.Frontend ), Handles REST API and Server Sided Rendering.
-   [Contract](https://github.com/Fraqs/LSD-Project.Contract ), Handles Contract Interface & Data Transfer Objects.
  
##  Setup
  
  
###  Dependency Installation
  
  
```bash
# bash
yarn install
```
  
> If the contract isn't installed add it with yarn.
  
```bash
# bash
yarn add Fraqs/LSD-Project.Contract
```
  
[Contract Documentation](https://github.com/Fraqs/LSD-Project.Contract )
  
##  Source Structure
  
  
```bash
src ┐
    ├ contract/     # the rpc contract and contract class.
    ├ test/         # test files.
    └ index.ts      # main file.
...                 # configuration files
```
  
##  Usage
  
  
The environment uses the RPC Contract with and open connection on localhost:3000.
  
```bash
# bash
yarn start
```
  
###  Testing
  
  
The test is handled by the test framework Jest.
  
```bash
# bash
yarn test
```
  
## 
  
  
Software Development @ Copenhagen Business Academy, Denmark 2020
  