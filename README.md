# Logical Gates

A simple (zero-depths) library to implements logic gates in JavaScript/TypeScript.

[![CircleCI](https://circleci.com/gh/KBeDevel/logical-gates-ts/tree/main.svg?style=svg&circle-token=4154e654baa7b0184b64e29a20857c0afd2d7b90)](https://circleci.com/gh/KBeDevel/logical-gates-ts/tree/main)

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
