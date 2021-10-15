# Logical Gates

A simple (zero-dependencies) library to implement logic gates in JavaScript/TypeScript.

[![CircleCI](https://circleci.com/gh/KBeDevel/logical-gates-ts/tree/main.svg?style=shield&circle-token=4154e654baa7b0184b64e29a20857c0afd2d7b90)](https://circleci.com/gh/KBeDevel/logical-gates-ts/tree/main) ![types](https://img.shields.io/npm/types/logical-gates-ts?style=flat-square) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/kbedevel/logical-gates-ts?color=gray&style=flat-square) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/dc054851d7d2434da76e6db4150eb95f)](https://www.codacy.com/gh/KBeDevel/logical-gates-ts/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=KBeDevel/logical-gates-ts&amp;utm_campaign=Badge_Grade) [![Codacy Badge](https://app.codacy.com/project/badge/Coverage/dc054851d7d2434da76e6db4150eb95f)](https://www.codacy.com/gh/KBeDevel/logical-gates-ts/dashboard?utm_source=github.com&utm_medium=referral&utm_content=KBeDevel/logical-gates-ts&utm_campaign=Badge_Coverage)

## Installation

Using NPM:

```zsh
npm install logical-gates-ts
```

Using [Yarn](https://yarnpkg.com/):

```zsh
yarn add logical-gates-ts
```

Using [pnpm](https://pnpm.io/):

```zsh
pnpm add logical-gates-ts
```

## How it works

This section provide the mathematical/logical description scheme for each logic gate

### AND

<table>
  <tbody>
    <tr>
      <th colspan="2">INPUT</th>
      <th>OUTPUT</th>
    </tr>
    <tr>
      <td>0</td><td>0</td><td align="center">0</td>
    </tr>
    <tr>
      <td>0</td><td>1</td><td align="center">0</td>
    </tr>
    <tr>
      <td>1</td><td>0</td><td align="center">0</td>
    </tr>
    <tr>
      <td>1</td><td>1</td><td align="center">1</td>
    </tr>
  </tbody>
</table>

Example:

```typescript
import { LogicalGates } from 'logical-gates-ts'

LogicalGates.AND(true, false) // -> false
```

### OR

<table>
  <tbody>
    <tr>
      <th colspan="2">INPUT</th>
      <th>OUTPUT</th>
    </tr>
    <tr>
      <td>0</td><td>0</td><td align="center">0</td>
    </tr>
    <tr>
      <td>0</td><td>1</td><td align="center">1</td>
    </tr>
    <tr>
      <td>1</td><td>0</td><td align="center">1</td>
    </tr>
    <tr>
      <td>1</td><td>1</td><td align="center">1</td>
    </tr>
  </tbody>
</table>

Example:

```typescript
import { LogicalGates } from 'logical-gates-ts'

LogicalGates.OR(true, false) // -> true
```

### XOR

<table>
  <tbody>
    <tr>
      <th colspan="2">INPUT</th>
      <th>OUTPUT</th>
    </tr>
    <tr>
      <td>0</td><td>0</td><td align="center">0</td>
    </tr>
    <tr>
      <td>0</td><td>1</td><td align="center">1</td>
    </tr>
    <tr>
      <td>1</td><td>0</td><td align="center">1</td>
    </tr>
    <tr>
      <td>1</td><td>1</td><td align="center">0</td>
    </tr>
  </tbody>
</table>

Example:

```typescript
import { LogicalGates } from 'logical-gates-ts'

LogicalGates.XOR(true, false) // -> true
```

### NAND

<table>
  <tbody>
    <tr>
      <th colspan="2">INPUT</th>
      <th>OUTPUT</th>
    </tr>
    <tr>
      <td>0</td><td>0</td><td align="center">1</td>
    </tr>
    <tr>
      <td>0</td><td>1</td><td align="center">1</td>
    </tr>
    <tr>
      <td>1</td><td>0</td><td align="center">1</td>
    </tr>
    <tr>
      <td>1</td><td>1</td><td align="center">0</td>
    </tr>
  </tbody>
</table>

Example:

```typescript
import { LogicalGates } from 'logical-gates-ts'

LogicalGates.NAND(true, false) // -> true
```

### NOR

<table>
  <tbody>
    <tr>
      <th colspan="2">INPUT</th>
      <th>OUTPUT</th>
    </tr>
    <tr>
      <td>0</td><td>0</td><td align="center">1</td>
    </tr>
    <tr>
      <td>0</td><td>1</td><td align="center">0</td>
    </tr>
    <tr>
      <td>1</td><td>0</td><td align="center">0</td>
    </tr>
    <tr>
      <td>1</td><td>1</td><td align="center">0</td>
    </tr>
  </tbody>
</table>

Example:

```typescript
import { LogicalGates } from 'logical-gates-ts'

LogicalGates.NOR(true, false) // -> false
```

### XNOR

<table>
  <tbody>
    <tr>
      <th colspan="2">INPUT</th>
      <th>OUTPUT</th>
    </tr>
    <tr>
      <td>0</td><td>0</td><td align="center">0</td>
    </tr>
    <tr>
      <td>0</td><td>1</td><td align="center">1</td>
    </tr>
    <tr>
      <td>1</td><td>0</td><td align="center">1</td>
    </tr>
    <tr>
      <td>1</td><td>1</td><td align="center">0</td>
    </tr>
  </tbody>
</table>

Example:

```typescript
import { LogicalGates } from 'logical-gates-ts'

LogicalGates.XNOR(true, false) // -> true
```
