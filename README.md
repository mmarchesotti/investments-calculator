# Investment Calculator

A small React app that projects how an investment grows over time. You enter an
initial investment, a yearly contribution, an expected annual return and a
duration, and the app renders a year-by-year breakdown of the results.

Built with React 19 and Vite.

## Features

- Live recalculation — the table updates as you type, no submit button
- Year-by-year table showing investment value, interest earned that year,
  total interest and invested capital
- Currency formatting via the browser's `Intl.NumberFormat` API
- Basic input validation: the table is replaced by a hint when the duration is
  less than 1

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (by default http://localhost:5173).

## Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the Vite dev server                |
| `npm run build`   | Build for production into `dist/`        |
| `npm run preview` | Serve the production build locally       |
| `npm run lint`    | Run ESLint over the project              |

## Project structure

```
src/
├── App.jsx                 # Holds the investment state and wires everything together
├── index.jsx               # React entry point
├── index.css               # Global styles
├── components/
│   ├── Header.jsx          # Logo and title
│   ├── UserInput.jsx       # The four number inputs
│   └── Result.jsx          # Results table
└── util/
    └── investment.js       # Calculation logic and the currency formatter
```

## How the calculation works

`calculateInvestmentResults` in `src/util/investment.js` iterates once per year.
Each year it applies the expected return to the current investment value, adds
the interest and the annual contribution to that value, and records the totals
for that year.

## About

I built this project as part of the Udemy course
[React - The Complete Guide (incl. Next.js, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
by Maximilian Schwarzmüller.
