# Prop Drilling

## What is prop drilling
Prop drilling is known as "threading props" or "component chaining", refers to the process of passing data from a parent component down to nested child component through props.

Props drilling occurs when a prop needs to be passed through several layers of nested componenets to reach a deeply nested child component that actually needs the props. Each intermediary component in the hierachy has to pass the prop down, even if it does not use the prop itself.

Consider a scenerio where you have a top-level component that fetches data from an API and needs to pass this data down to multiple nested child components.

Instead of directly passing the data to each child component, you pass it through eah intermediary component in the hierarchy until it reaches the desired chil component. This passing of props through multiple levels of components is what prop drilling entails.

