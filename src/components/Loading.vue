<template>
  <div class="body">
    <div class="loading">
      <span>l</span>
      <span>o</span>
      <span>a</span>
      <span>d</span>
      <span>i</span>
      <span>n</span>
      <span>g</span>
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </div>
  </div>
</template>

<script>

</script>

<style>
.body {
  height: 100vh;
  margin: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #2980b9, #6dd5fa, #ffffff);
  color: white;
  font-family: Averia Sans Libre, Fantasy;
}
.loading span {
  text-transform: uppercase;
  font-size: 4vw;
  font-weight: 600;
  opacity: 0;
  display: inline-block;
  padding: 0em 0.5em;
  animation: letterWave 2s infinite linear;
}

.loadig span:nth-child(0) {
  animation-delay: 0ms;
}

.loadig span:nth-child(1) {
  animation-delay: 250ms;
}

.loadig span:nth-child(2) {
  animation-delay: 500ms;
}

.loadig span:nth-child(3) {
  animation-delay: 750ms;
}

.loadig span:nth-child(4) {
  animation-delay: 1000ms;
}

.loadig span:nth-child(5) {
  animation-delay: 1250ms;
}

.loadig span:nth-child(6) {
  animation-delay: 1500ms;
}

.loadig span:nth-child(7) {
  animation-delay: 1750ms;
}

.loadig span:nth-child(8) {
  animation-delay: 2000ms;
}

.loadig span:nth-child(9) {
  animation-delay: 2250ms;
}

.loadig span:nth-child(10) {
  animation-delay: 2500ms;
}

@keyframes letterWave {
  0%,
  100% {
    transform: translateY(0) scale(1);
    padding: 0 0.5em;
    opacity: 0.8;
  }
  25% {
    transform: translateY(-1em) scale(0.8);
    padding: 0 0em;
    opacity: 0.6;
  }
  75% {
    transform: translateY(1em) scale(1.5);
    padding: 0 1em;
    opacity: 1;
  }
}
</style>
