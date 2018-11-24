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


## Team
| [![CloudEight](https://avatars1.githubusercontent.com/u/39433551?s=100)](https://github.com/cloudeight) | [![Joe Mottershaw](https://avatars1.githubusercontent.com/u/5093255?s=100)](https://github.com/joemottershaw) |
|:-------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------:|
| [CloudEight](https://github.com/cloudeight)                                                             | [Joe Mottershaw](https://github.com/joemottershaw)                                                            |

Along with the help from these [fine people](https://github.com/cloudeight/github-boilerplate/graphs/contributors)!


## Contributing
We appreciate you wanting to contribute to this project and would love to work with as many people as possible. All we ask is that you read this [style guidelines](https://github.com/cloudeight/style-guidelines) documentation project and please follow our [contribution guidelines](./.github/CONTRIBUTING.md) and [code of conduct](./.github/CODE_OF_CONDUCT.md).


## License
This project is open-sourced and licensed under the [MIT License](./LICENSE).
