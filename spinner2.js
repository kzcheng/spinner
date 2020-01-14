const ANIMATION = "|/-\\|/-\\|\n";
for (let i = 0; i < ANIMATION.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${ANIMATION[i]}`);
  }, 100 + i * 200);
}