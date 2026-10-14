'use strict';

// The roast corpus. Kept as plain data so it can be tree-shaken, filtered,
// or served straight to a UI without pulling in any logic.

const savageRoasts = [
  "Your brain is like a web browser—multiple tabs open, but no one knows what's going on.",
  "If I had a dollar for every time you said something smart, I'd be broke.",
  "You're like a cloud. When you disappear, it's a beautiful day.",
  "You bring everyone so much joy when you leave the room.",
  "I'd agree with you, but then we'd both be wrong.",
  "I'd explain it to you, but I left my English-to-Dingbat dictionary at home.",
  "Your birth certificate is an apology letter from the condom factory.",
  "If I wanted to hear from an idiot, I would've watched a reality TV show.",
  "You have the perfect face for radio.",
];

const lightRoasts = [
  "You're like a lighthouse in a desert—completely out of place and no one needs you.",
  "You bring everyone so much peace...when you stop talking.",
  "If ignorance is a disease, you might be patient zero.",
  "Your opinions are like pennies—two cents that nobody wants.",
  "You couldn't pour water out of a boot if the instructions were on the heel.",
  "You're living proof that intelligence skips generations.",
  "You're like a software bug: irritating, hard to fix, and causing chaos wherever you go.",
  "You have something on your chin...oh, it's your other chin.",
  "If your life was a movie, it would be titled 'Lost Without a Clue.'",
  "You bring the phrase 'wasted potential' to an Olympic level.",
  "You have the perfect face for radio.",
  "You're like a software update. Whenever I see you, I think, 'Not now.'",
  "If ignorance is bliss, you must be the happiest person alive.",
  "Your secrets are always safe with me. I never even listen when you tell me them.",
  "You're like a pizza. When you're good, you're good, but when you're bad, you're still pretty good.",
  "You're the reason they put instructions on shampoo bottles.",
  "I don't know what's longer, your IQ or the line at the DMV.",
  "You're not stupid; you just have bad luck thinking.",
  "You must be the square root of negative one, because you can't be real.",
];

const generalRoasts = [
  "You're proof that even a broken clock is right twice a day.",
  "I've seen salads dressed better than you.",
  "You have the perfect face for a blind date.",
  "You must have been born on a highway because that's where most accidents happen.",
  "You're like a pencil: pointless.",
  "If you were any dumber, we'd have to water you. Even a houseplant has more common sense than you.",
  "Your parents must be so proud of you for making it this far without totally destroying yourself.",
  "You're a great example of how much potential someone has when they never use their brain.",
  "I'm not saying I hate you, but I would unplug your life support to charge my phone.",
  "It's not that you're ugly. You're just... not pretty either.",
];

const savageBurns = [
  "I'd explain it to you, but I left my English-to-Dingbat dictionary at home.",
  "Your intellect is a black hole—nothing escapes, including your ideas.",
  "You're not stupid; you just have bad luck thinking.",
  "You bring a lot of joy to everyone who doesn't have to listen to you.",
  "You've got the perfect face for radio. Just hope your voice doesn't ruin it.",
  "You're like a phone with no signal – you're just not worth my time.",
  "I don't need to exercise – I get all the cardio I need just from running away from your stupidity.",
  "You're the human embodiment of a participation trophy.",
  "You have the brain of a rock, but the looks of a potato.",
  "Your personality is like a cloud; once it disappears, it's a beautiful day.",
  "If ignorance is bliss, you must be the happiest person alive.",
];

const funnyRoasts = [
  "Your secrets are safe with me. I wasn't even listening when you told me them.",
  "I'm not saying I hate you, but I would unplug your life support to charge my phone.",
  "You are proof that even a blind squirrel can find a nut once in a while.",
  "You have the charm of soggy toast.",
  "Hey, did you get lost on your way to the top or did you just take the stairs to nowhere?",
  "You might want to consider a career in stand-up comedy because the jokes you tell make everyone laugh for the wrong reasons.",
  "You're like a slinky: not really good for anything, but you bring a smile to my face when you fall down the stairs.",
];

/**
 * Build the personalised pool for a name.
 * @param {string} name
 * @returns {string[]}
 */
const personalizedRoasts = (name) => [
  `${name}, I'm trying to be nice, but it's getting harder every day.`,
  `${name}, I'd agree with you, but then we'd both be wrong.`,
  `${name}, are you always this stupid, or is today a special day?`,
  `${name}, you should come with a warning label—"Objects in the mirror are dumber than they appear."`,
];

const STYLES = ['savage', 'light', 'general', 'burn', 'funny'];

const DATA = {
  savage: savageRoasts,
  light: lightRoasts,
  general: generalRoasts,
  burn: savageBurns,
  funny: funnyRoasts,
};

module.exports = {
  STYLES,
  DATA,
  savageRoasts,
  lightRoasts,
  generalRoasts,
  savageBurns,
  funnyRoasts,
  personalizedRoasts,
};
