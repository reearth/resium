---
id: contribution
title: Contribution
---

# Contribution

Your contribution welcome!

## Reporting bugs

If you find bugs ascribed to resium, please open a issue in [GitHub issues](https://github.com/reearth/resium/issues).

## When you have a question

Post your question to [GitHub issues](https://github.com/reearth/resium/issues).

Note: Please do not email the author if at all possible.

## Suggesting new features or new components

Please open a issue in [GitHub issues](https://github.com/reearth/resium/issues).

## Start hacking

Resium requires an editor supporting TypeScript, ESLint, and Yarn.

1. Fork [resium repository](https://github.com/reearth/resium).
2. Clone a new repository made with forking.
3. Install modules with `yarn` command.
4. Let's develop!
5. Commit and push your changes.
6. Make a new [pull request](https://github.com/reearth/resium/pulls) in resium repository.

- To run test: `yarn test`
- To start storybook: `yarn storybook`
- To build: `yarn build`

## Adding new properties to a component

It is very easy to add a new typical property to a Cesium component. Your PR welcome!

For example, let's add a new property `test` added to Viewer class in Cesium, to `<Viewer>` component. Open and edit `src/Viewer.tsx`.

If `test` is a variable property:

```ts
const cesiumProps = [
  // ...
  "test", // <== Add a new property name
] as const;
```

All is done!

If `test` is a read only property:

```ts
const cesiumReadonlyProps = [
  // ...
  "test", // <== Add a new property name
];
```

If `test` is an event property:

**Note**: Follow React's convention for the event name. For example:

- `tickEvent` => `onTick`
- `progress` => `onProgress`

```ts
export type ViewerEventProps = {
  // ...
  onTest?: () => void; // <=== Add a new property type
};
```

and

```ts
export const cesiumEventProps: EventKeyMap<Viewer, ViewerProps> = {
  onTest: "test", // <== Add a new property name mapping
};
```

## Adding unit tests for components

Unit tests for core are mostly well, but for components are lack. Your PR welcome!

### 1. Add stubs

Resium uses Jest as a test runner and assertion library. But Cesium cannot be loaded in Jest, because it deeply depends on Web APIs (WebWorker, WebGL and so on). That's why creating stubs for Cesium is required.

Stubs are located in `__mocks__` directory. For details, refer to existing stubs.

### 2. Add unit tests

Unit tests are located in `src/tests` directory. For details, refer to existing tests: `src/tests/Entity.test.tsx`. It uses enzyme.

Please write test code to test as follows:

- Test if the component can mount properly.
- Test if the component can update properties properly.
- Test if the component can unmount properly.
