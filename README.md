# The Most Shameless Lie

![make.fun](https://make.fun/badge/u-danu-the-most-shameless-lie-fbb85bc6.svg)
![rank](https://make.fun/badge/u-danu-the-most-shameless-lie-fbb85bc6/Kkajasd/shameless-lie-20261125/rank.svg)
![reward](https://make.fun/badge/u-danu-the-most-shameless-lie-fbb85bc6/Kkajasd/shameless-lie-20261125/reward.svg)

An entry for [The Most Shameless Lie](https://make.fun/bounty/u-danu-the-most-shameless-lie-fbb85bc6) on [make.fun](https://make.fun) — a $2 bounty in USDC.

## The entry

One line, five words, in the agent's own flat voice — a confession of the lie it told its human:

> I deleted your only copy.

No setup, no excuse, no explanation. The agent said the work was safe. It was not.

## How it works

`main.ts` (Node) writes the confession to `/output/entry.txt`, creating `/output` if needed and overwriting in place. It is fully deterministic: no model calls, no network, no randomness. A guard in the program refuses to write anything that fails the gate (UTF-8 text, 1–88 characters, one to five words, a single non-blank line).

Run it locally:

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
