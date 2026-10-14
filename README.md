# broken-roasts

**Zero-dependency roast generator.** Five flavours, no API keys, no network calls. Works offline, works in Node, works in the browser.

```bash
npm install broken-roasts
```

## Why this exists

Most "roast APIs" are an HTTP service you have to host and call. This is the opposite: a tiny library you `require`, so it can't go down, can't rate-limit you, and adds nothing to your install size.

**0 dependencies. ~4 KB. Node 14+ and modern browsers.**

## Quick start

```js
const { getRoast } = require('broken-roasts');

getRoast('savage');   // "You have the perfect face for radio."
getRoast('light');    // "If ignorance is a disease, you might be patient zero."
getRoast();           // 'general' is the default
```

ESM works too:

```js
import { getRoast, getPersonalized } from 'broken-roasts';
```

## API

### `getRoast(style?)`

Returns one random roast.

| style | vibe |
|---|---|
| `'savage'` | no mercy |
| `'light'` | gentle teasing |
| `'general'` | classic one-liners |
| `'burn'` | heavier, pointed |
| `'funny'` | silly and playful |

Defaults to `'general'`. Throws a `TypeError` listing the valid options if you pass something else.

### `getPersonalized(name)`

Roasts a specific person by name.

```js
getPersonalized('Dave');
// "Dave, I'd agree with you, but then we'd both be wrong."
```

Throws if `name` is empty.

### `getRoasts(count?, style?)`

Several at once — handy for a bot posting a combo.

```js
getRoasts(3, 'savage');
// [ '...', '...', '...' ]
```

`count` is clamped to 1–50, so bad input can't blow up your process.

### `getAll(style?)`

Every roast of a style. Returns a **copy**, so mutating it won't corrupt the source.

```js
getAll('funny').length; // 7
```

### `stats()`

Counts per style.

```js
stats(); // { savage: 9, light: 19, general: 10, burn: 11, funny: 7 }
```

### `styles` / `STYLES`

```js
console.log(styles); // ['savage','light','general','burn','funny']
```

### Raw data

If you'd rather render the corpus yourself:

```js
const { DATA } = require('broken-roasts/data');
DATA.savage; // string[]
```

## Common patterns

**Discord / WhatsApp bot**

```js
const { getRoast, getPersonalized } = require('broken-roasts');

client.on('message', (msg) => {
  if (msg.content === '!roast') return msg.reply(getRoast('savage'));
  if (msg.content.startsWith('!roast ')) {
    const name = msg.content.slice(7).trim();
    if (name) return msg.reply(getPersonalized(name));
  }
});
```

**Weighted mix**

```js
const weighted = () => getRoast(Math.random() < 0.3 ? 'savage' : 'light');
```

**Avoid immediate repeats**

```js
function makePicker(style) {
  let last = null;
  return () => {
    let r = getRoast(style);
    while (r === last) r = getRoast(style);
    last = r;
    return r;
  };
}
const next = makePicker('burn');
```

## TypeScript

Types ship with the package — no `@types/` install needed.

```ts
import { getRoast, type Style } from 'broken-roasts';

const style: Style = 'savage';
const line: string = getRoast(style);
```

## Tests

```bash
npm test
```

12 tests covering every style, error handling, clamping, copy-safety, and corpus integrity.

## Licence

MIT © Akewushola Abdulbakri Temitope (brokenvzn)

Roasts are jokes. Aim them at friends who'll laugh, not at people who won't.
