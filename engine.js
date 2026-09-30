// CaskMath engine - whisky dilution and cask math. Pure functions, no DOM.
(function (root) {
  'use strict';

  // Water (ml) to add to volMl of spirit at abvFrom (%) to reach abvTo (%).
  function waterToAdd(volMl, abvFrom, abvTo) {
    if (volMl < 0 || abvFrom <= 0 || abvTo <= 0) throw new Error('positive values only');
    if (abvTo >= abvFrom) throw new Error('target must be lower than current strength');
    return volMl * (abvFrom / abvTo - 1);
  }

  // Resulting ABV after adding waterMl to volMl at abv (%).
  function abvAfterDilution(volMl, abv, waterMl) {
    if (volMl <= 0 || abv < 0 || waterMl < 0) throw new Error('bad inputs');
    return abv * volMl / (volMl + waterMl);
  }

  // Drops (1 drop ~ 0.05 ml) for a water addition.
  function dropsFor(waterMl) {
    if (waterMl < 0) throw new Error('negative water');
    return waterMl / 0.05;
  }

  // US proof = 2 x ABV.
  function usProof(abv) {
    return abv * 2;
  }

  // Angel's share: volume left after years of annual lossPct evaporation.
  function angelsShare(startLiters, years, lossPct) {
    if (startLiters < 0 || years < 0 || lossPct < 0) throw new Error('bad inputs');
    return startLiters * Math.pow(1 - lossPct / 100, years);
  }

  // Bottles (floor) of bottleMl from liters remaining.
  function bottlesFrom(liters, bottleMl) {
    if (liters < 0 || bottleMl <= 0) throw new Error('bad inputs');
    return Math.floor(liters * 1000 / bottleMl);
  }

  // Cost per dram.
  function costPerDram(price, bottleMl, dramMl) {
    if (price < 0 || bottleMl <= 0 || dramMl <= 0) throw new Error('bad inputs');
    return price / (bottleMl / dramMl);
  }

  // Strength verdict for sipping.
  function strengthVerdict(abv) {
    if (abv >= 55) return 'cask strength - a few drops of water will open it up';
    if (abv >= 46) return 'full proof - non-chill-filtered territory, drinks bold';
    if (abv >= 43) return 'standard strength - balanced as poured';
    if (abv >= 40) return 'entry strength - easy, maybe a little quiet';
    return 'below 40 - that is a liqueur or a very sad whisky';
  }

  var api = {
    waterToAdd: waterToAdd,
    abvAfterDilution: abvAfterDilution,
    dropsFor: dropsFor,
    usProof: usProof,
    angelsShare: angelsShare,
    bottlesFrom: bottlesFrom,
    costPerDram: costPerDram,
    strengthVerdict: strengthVerdict
  };
  root.CaskMath = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
