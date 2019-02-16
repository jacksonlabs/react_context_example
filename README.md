# React Context Examples

This project contains examples for using React with Contexts for passing state and functions between components.

The code for this is adapted from https://github.com/wesbos/React-Context shown in the YouTube video https://www.youtube.com/watch?v=XLJN4JfniH4 .

## Layout

```                              
                        +-> Middle -> CountA   
MyContext.js -> App.js -+-> CountB
    |                   +-> component/CountC.js
    |                                    ^
    |                                    |
    +------------------------------------+
```

## Setup

Navigate into the project folder and run:
```
yarn install
```

## Run

Navigate into the project folder and run:
```
yarn start
```

This should open a browser page to http://localhost:3000 .