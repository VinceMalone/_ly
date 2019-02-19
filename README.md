# \_ly (Underly)

A collection of curried utility/helper functions.

## Documentation

Every function is documented in its source file. Ideally there would be a nice (auto-generated) UI where the documentation would be displayed; coming soon™.

## FAQ

### Q: What belongs here?

A: That may be best answered by instead answering "What _doesn't_ belong here?" Helpers that include **business** logic do not belong here; for example:

```js
import { format } from '_ly';

format('percentage')(40.5); // "40.50%"
```
