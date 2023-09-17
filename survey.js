const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name, or nickname? ', (answerName) => {
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    rl.question('What do you like to listen to while doing that activity? ', (answer3) => {
      rl.question('What mealtime is your favourite? Breakfast, brunch, lunch, etc. ', (answer4) => {
        rl.question('What\'s you\'re favourite thing to eat for that meal? ', (answer5) => {
          rl.question('What sport is your absolute favourite? ', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`${answerName} loves listening to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}.`);

              rl.close();
            });
          });
        });
      });
    });
  });
});