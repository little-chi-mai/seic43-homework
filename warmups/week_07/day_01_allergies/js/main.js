// # Allergies Warmup

// An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).

// The list of items (and their value) that were tested are:

// - eggs (1)
// - peanuts (2)
// - shellfish (4)
// - strawberries (8)
// - tomatoes (16)
// - chocolate (32)
// - pollen (64)
// - cats (128)

// So if Tom is allergic to peanuts and chocolate, he gets a score of 34.

// Now, given just that score of 34, your program should be able to say:

// - Whether Tom is allergic to any one of those allergens listed above.
// - All the allergens Tom is allergic to.

// ```
// scorecard:
//   1: "eggs",
//   2: "peanuts",
//   4: "shellfish",
//   8: "strawberries",
//   16: "tomatoes",
//   32: "chocolate",
//   64: "pollen",
//   128: "cats"
// ```

console.log('Javascript welcomes you back!');

const allergyScore = function (num) {
    const scorecard = {
        1: "eggs",
        2: "peanuts",
        4: "shellfish",
        8: "strawberries",
        16: "tomatoes",
        32: "chocolate",
        64: "pollen",
        128: "cats"
    }

    const allergies = [];
    const scores = Object.keys(scorecard);

    if (num === 0) {
        return 'Good news! No allergies';
    } else {
        for (let i = scores.length - 1; i >= 0; i--) {

            if (num >= scores[i]) {
                allergies.push(scorecard[scores[i]]);
                num -= scores[i]
            }
        }
    }

    return `Here is your list of allergies: ${allergies.join(', ')}.`
}

console.log(allergyScore(34));