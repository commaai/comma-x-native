# X UI Library for React Native

## install:
`npm install --save https://github.com/commaai/comma-x-native`

## use:
##### /MyTheme.js
```
import X from 'comma-x-native';
const Theme = {
  text: {
    sizes: {
      foo: 55,
    },
    colors: {
      bar: '#011235',
    }
  },
}
export default X(Theme);
```

##### /MyComponent.js
```
import X from './Theme';
...
render() {
  return (
    <X.Text
      size='foo'
      color='bar'>
      Sick Text
    </X.Text>
  )
}
```

## build:
```
> git clone https://github.com/commaai/comma-x-native
> cd comma-x-native
> npm install
> npm test
```
