# Context API

- provides a mechanism for components to 'talk' to each other without passing around data and functions as props, or dispatching lots of events
- if a component calls `setContext(key, context)`, then any child component can retrieve the context with `const context = getContext(key)`.
- **contexts vs. stores** 
  - context is only available to a component and its descendants
  - context is not reactive, values that change over time should be represented as stores
