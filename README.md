# CaskMath

Whisky dilution and cask math.

- **Dilution**: exact water (ml and drops) to take a pour from cask strength to a target ABV, and the resulting ABV after any addition.
- **Proof and verdicts**: US proof conversion plus plain-word strength bands.
- **Angel's share**: volume left in the cask after years of evaporation, and the bottle count at the end.
- **Cost per dram**: bottle price translated to the pour in front of you.

Static client-side app. `engine.js` holds the pure math (Node-testable), `app.html` wires it to the UI.

Live: https://ilanis-agent.github.io/caskmath/
