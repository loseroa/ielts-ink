<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Writing Questions</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <QuestionCard
          v-for="question in questions"
          :key="question.id"
          v-bind="question"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import QuestionCard from '~/components/QuestionCard.vue';

const questions = ref([
    {
        id: 1,
        background: "Some people think that parents should plan their children's free time carefully...",
        title: "Children's Free Time Activities",
        type: "Task 2",
        fullQuestion: "To what extent do you agree or disagree with this view?"
    },
    {
        id: 2,
        background: "The graph below shows average CO2 emissions per person in four different countries between 1967 and 2007.",
        title: "CO2 Emissions Trends",
        type: "Task 1",
        fullQuestion: "Summarize the information by selecting and reporting the main features, and make comparisons where relevant."
    },
    {
        id: 3,
        background: "Many people believe that international tourism creates understanding between nations.",
        title: "International Tourism Impact",
        type: "Task 2",
        fullQuestion: "Discuss the advantages and disadvantages of international tourism."
    },
    {
        id: 4,
        background: "The pie charts show the main reasons for migration to and from the UK in 2007.",
        title: "UK Migration Patterns",
        type: "Task 1",
        fullQuestion: "Summarize the information by selecting and reporting the main features, and make comparisons where relevant."
    },
    {
        id: 5,
        background: "Some people think that governments should spend money on space exploration.",
        title: "Space Exploration Funding",
        type: "Task 2",
        fullQuestion: "To what extent do you agree or disagree with this opinion?"
    },
    {
        id: 6,
        background: "The diagram shows the process of producing cement.",
        title: "Cement Production Process",
        type: "Task 1",
        fullQuestion: "Describe the process shown in the diagram."
    },
    {
        id: 7,
        background: "In many countries, the gap between rich and poor is increasing.",
        title: "Economic Inequality",
        type: "Task 2",
        fullQuestion: "What problems does this cause? What can be done about it?"
    },
    {
        id: 8,
        background: "The tables show changes in the transportation methods used by students at a UK university.",
        title: "Student Transportation Trends",
        type: "Task 1",
        fullQuestion: "Summarize the information by selecting and reporting the main features, and make comparisons where relevant."
    },
    {
        id: 9,
        background: "Some people believe that unpaid community service should be mandatory for all students.",
        title: "Mandatory Community Service",
        type: "Task 2",
        fullQuestion: "Do you agree or disagree with this statement?"
    },
    {
        id: 10,
        background: "The line graph shows energy consumption in four different sectors from 1981 to 2012.",
        title: "Energy Consumption Patterns",
        type: "Task 1",
        fullQuestion: "Describe the main trends and make comparisons where appropriate."
    },
    {
        id: 11,
        background: "Many people say that traditional cultural practices are being lost.",
        title: "Cultural Preservation",
        type: "Task 2",
        fullQuestion: "Why is this happening? Should we try to prevent this loss?"
    },
    {
        id: 12,
        background: "The maps show the development of a small town between 1995 and 2020.",
        title: "Town Development",
        type: "Task 1",
        fullQuestion: "Describe the main changes that have taken place."
    }
]);
</script>
