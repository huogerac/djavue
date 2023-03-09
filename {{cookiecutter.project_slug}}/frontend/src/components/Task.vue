<template>
  <v-card>
    <v-card-text>
      <div>#{% raw %}{{ task.id }}{% endraw %}</div>
      <p class="ma-0 pa-0 text-h5 text--primary">
        {% raw %}{{ task.description }}{% endraw %}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TasksModel",
  props: {
    task: {
      type: Object,
      default: null,
      roger: "usalinter",
    },
  },
  data: () => ({}),
}
</script>
