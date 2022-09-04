<script>
import TheBanner from "./components/UI/TheBanner.vue";
import TheForm from "./components/UI/TheForm.vue";

export default {
  components: { TheBanner, TheForm },
};
</script>

<template>
  <main>
    <section class="main-copy">
      <h1>Learn to code by watching others</h1>
      <p>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable
      </p>
    </section>

    <section>
      <div :style="{ marginBottom: '1.5rem' }">
        <TheBanner></TheBanner>
      </div>

      <div>
        <TheForm />
      </div>
    </section>
  </main>
</template>

<style lang="scss">
.main-copy {
  text-align: center;
  color: var(--clr-white);
  padding-top: 5rem;
  margin-bottom: 4rem;
  @media (min-width: 1024px) {
    padding-top: 0;
    margin-bottom: 0;
    text-align: left;
  }

  h1 {
    font-size: clamp(2rem, 4vw + 1rem, 3rem);
    font-weight: 700;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    font-weight: 500;
  }
}
.space-y-1 > * + * {
  margin-top: 1.25rem;
}

main {
  max-width: 75rem;
  margin: 0 auto;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-top: 6.25rem;

    & > * {
      flex: 1;
    }
  }
}
</style>
