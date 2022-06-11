# display-my-framework
A minimal React JS framework to get started.
# Usage
- Install the framework > npm install https://github.com/DisplayTable/display-my-framework.
- Wrap the routes / components you want to take advantage of the framework with the DMFFramework component.

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
Configuration options passed to the framework. The framework natively only supports fetch interceptors at the moment. Extra properties passed it's for developers use.

Default value: 
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
This component let's you wrap components inside a wrapper that exposes layout state and dispatch trough a render prop.
```
<DMFLayout 
    reducer={() => state} 
    initialState={{test: 123}} 
    render={
        (state, dispatch) => <></>
    }
>
    <ComponentWhoUsesStore>
</DMFStore>
```
## Store
This component let's you create a store provider quickly.
```
<DMFStore reducer={() => state} initialState={{test: 123}}>
    <ComponentWhoUsesStore>
</DMFStore>
```
After that you can access that data trough the following hook:
```
const { state, dispatch } = useDMFStore();
```
# Hooks
These are the hooks available to the developer who uses the framework. All the hooks share one action to change state trough UPDATE_FIELD in the actions object.
```
dispatch({ type: actions.UPDATE_FIELD payload: data })
```
## Config
With this we can access the configuration options anywhere in the framework in a reliable way.
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
This hook allows to access the error provider data. 
```
const { state, dispatch } = useDMFErrorProvider();
```
Default values: 
```
const defaultInitialState = {
  loading: false,
  open: false,
  message: "",
};
```
## Layout
This hook allows to access the layout provider data. 
```
const { state, dispatch } = useDMFLayoutProvider();
```
Default values:
```
const defaultInitialState = {
  data: null,
  loading: false
};
```
## Menu
This hook allows to access the menu provider data. 
```
const { state, dispatch } = useDMFMenuProvider();
```
Default values:
```
const defaultInitialState = {
  routes: [],
  path: '', 
  loading :false
};
```
## Auth
This hook allows to access the auth provider data. 
```
const { state, dispatch } = useDMFAuthProvider();
```
Default values:
```
const defaultInitialState = {
  token: '',
  refreshToken: ''
};
```