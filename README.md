# Vanilla JavaScript Plugin Boilerplate
> *A boilerplate template for developing vanilla JavaScript plugins.*
<br />

## Install
- Copy the contents of [boilerplate.js](./boilerplate.js) into your project.
- Set the `pluginName`
- Set the `defaults`
- Add private and public methods

## Instantiate
``` javascript
// Create a new instance of the plugin
var boilerplate = new Boilerplate('.selector', {
    property: 'New Value'
});

// Call a public method
boilerplate.publicMethod();

// Refresh or destroy the plugin
boilerplate.refresh();
boilerplate.destroy();
```

## Contributing
Please read this [style guidelines](https://github.com/joemottershaw/style-guidelines) documentation project and please follow the [contribution guidelines](./.github/CONTRIBUTING.md) and [code of conduct](./.github/CODE_OF_CONDUCT.md).

## License
This project is open-sourced and licensed under the [MIT License](./LICENSE).
