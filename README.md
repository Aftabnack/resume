# Aftab Khan's Resume

This repo is going to be powering the resume for Aftab Khan. There has been a fair amount of procrastination that has gone into starting this. But finally it has been decided that we are going to be trying a couple of things out for this one. Initially the scope had a lot of things to be done. But for the sake of sanity & "Atomic Habits", we are going to start with the following

- We are going to focus on making just one pager
- We are trying our Vite 3 for the first time
- We are going to use [React PDF](https://react-pdf.org/) which is promising both Web view & PDF download capability
- Let's hope this helps "Catch the eye" easily :)

## Current Tech Stack

- ViteJS + React TS
- Single codebase doing both ReactPDF on NodeJS + React Native Web on browser
- Github pages via Github Actions

## Implementation notes

### Day 1: The initial setup & testing out the React PDF package

- Started with ViteJS and sure enough everything was fast
- After installing the react-pdf package, got to know that I had to setup a lot of additional shims since react-pdf was using node packages on Browser: https://stackoverflow.com/a/70666018
- After that was able to build the initial section and setup Github Actions to deploy this to github pages

### Day 2: RNW for the web & PDF generation in NodeJS

- Added RNW to the project, setup it's types etc
- Wrote a shim file to map all the components that I am using from React-PDF to map it to RNW
- Add this shim to the vite.config for aliassing
- Needed ts-node to run React-PDF generation in node
- And viola!! The whole website is now rendered on browser by RNW & node code runs & generates the PDF post build

### Day 3: Scaling issues

- Found out that the web was smaller than the rendered PDF
- After digging into a lot of things, found out that the difference was in the units, the default unit for React-PDF was pt & RNW was obviously px.
- Wrote a custom logic to recurse thru all the styles and update **all numbers** by a factor of 1.33
