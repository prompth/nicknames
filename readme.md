# Nicknames

> Get popular nicknames

The name lists are just JSON files and can be used wherever.

## Install

```
$ npm install --save nicknames
```


## Usage

```js
var nicknames = require('nicknames');

nicknames.femaleRandom();
//=> Cookie
```


## API

### .female

Type: `array`

Top 100 female nicknames sorted by popularity.

### .male

Type: `array`

Top 100 male nicknames sorted by popularity.

### .all

Type: `array`

Top 200 nicknames sorted by popularity.

### .femaleRandom()

Type: `function`

Random female nickname.

### .maleRandom()

Type: `function`

Random male nickname.

### .allRandom()

Type: `function`

Random nickname.


## CLI

```
$ npm install --global nicknames
```

```
$ nicknames --help

  Examples
    $ nicknames
    Cookie

    $ nicknames --all --type male
    Champ
    Captain
    ...

  Options
    --all   Get all names instead of a random name
    --type  Type of name: female|male|all  Default: all
```


## Related
- [`cat-names`](https://github.com/sindresorhus/dog-names) - Get popular dog names
- [`cat-names`](https://github.com/sindresorhus/cat-names) - Get popular cat names

## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
