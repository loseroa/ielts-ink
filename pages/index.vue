<template>
  <div class="container">
    <h1>IELTS Practice</h1>
    <div class="cards-container">
      <SkillCard title="WRITING PART 1">
        <p>Practice your essay writing skills for IELTS Academic Task 1</p>
      </SkillCard>
      <SkillCard title="WRITING PART 2">
        <p>Improve your essay writing for IELTS Academic Task 2</p>
      </SkillCard>
      <SkillCard title="READING">
        <p>Enhance your reading comprehension skills</p>
      </SkillCard>
    </div>
  </div>
</template>

<script>
import SkillCard from '~/components/SkillCard.vue'

export default {
  components: {
    SkillCard
  }
}
</script>

<style scoped>
.container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}
</style>