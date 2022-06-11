# display-my-framework
A minimal React JS framework to get started.

# Usage
- Install the framework trough npm install @displaytable/display-my-framework@0.1.0.
- Wrap the app or the components you want to take advantage of the framework with the DMFFramework component.

```
<DMFFramework
    authState={{ customAuthProperty: 123 }}
    authReducer={() => state}
    errorState={{ customErrorProperty: 123 }}
    errorReducer={() => state}
    menuState={{ customMenuProperty: 123 }}
    menuReducer={() => state}
>
    <TestComponent />
</DMFFramework>
```
## Properties of the framework component
The framework accepts the following configuration properties.
### config
Configuration options passed to the framework. The framework natively only supports fetch interceptors at the moment. Default value: 
```
const defaultConfig = {
    interceptors: [],
};
```
### authState
State override for the auth provider.
### authReducer
Reducer override for the auth provider.
### errorState
State override for the error provider.
### errorReducer
Reducer override for the error provider.
### menuState
State override for the menu provider.
### menuReducer
Reducer override for the menu provider.
# Components
The framework has the following helper components
## Layout

## Store
# Hooks

These are the hooks available to the user of the framework user

## Config
With this 
```
const config = useDMFConfigProvider();
```

## Console
This hook allows to print data to the console only when in development mode. The function returned accepts two parameters:
- type. The type of log we want. Same types as native console functions.
- value. Data we want to output to the console.
```
const { log } = useConsole();
log('error', 'This is an error');
```
## Error
```
const config = useDMFConfigProvider();
```
## Layout
```
const config = useDMFConfigProvider();
```
## Menu
```
const config = useDMFConfigProvider();
```
## Auth
```
const config = useDMFConfigProvider();
```