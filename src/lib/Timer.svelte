<script>
  let countdown = 20 * 60; // 20 minutes in seconds
  let interval;
  let bellSound = new Audio("bell.ogg"); // Ensure the path is correct based on your project structure
  function startCountdown() {
    clearInterval(interval);
    interval = setInterval(() => {
      countdown--;
      if (countdown === 0) {
        clearInterval(interval);
        bellSound.play();
      }
    }, 1000);
  }

  function addTime() {
    countdown += 60; // Add 1 minute
  }

  function removeTime() {
    if (countdown > 60) {
      // Prevent the countdown from going below 1 minute
      countdown -= 60; // Remove 1 minute
    }
  }

  function resetTimer() {
    clearInterval(interval);
    countdown = 20 * 60; // Reset to 20 minutes
  }
</script>

<main class="timer">
  <button on:click={addTime}>^</button>
  <div class="subtimer">
    <button on:click={startCountdown}>▶</button>
    <h1>
      {String(Math.floor(countdown / 60)).padStart(2, "0")}:{(
        countdown % 60
      ).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}
    </h1>
    <button on:click={resetTimer}>↺</button>
  </div>
  <button on:click={removeTime}>⌄</button>
</main>

<style>
  .timer {
    display: flex;
    flex-direction: column;
    font-size: 3rem;
  }

  .timer > button,
  .timer > * > button {
    background-color: transparent;
  }
  .timer > button {
    padding: 0;
    margin: 0;
  }

  .subtimer {
    display: flex;
    place-content: center;
  }

  .subtimer > button {
    aspect-ratio: 1/1;
    height: 100%;
  }

  .subtimer > h1 {
    font-family: monospace;
    line-height: 2.4;
    margin: 0;
  }

  @media (min-width: 768px) {
    
  }

  h1 {
    font-size: 4rem;
    /* margin: 20px 0; */
  }
</style>