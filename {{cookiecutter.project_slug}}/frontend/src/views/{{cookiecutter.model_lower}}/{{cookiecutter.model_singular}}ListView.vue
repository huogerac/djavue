<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-card>
          <v-card-title class="headline"> {{ cookiecutter.model }} </v-card-title>
        </v-card>
      </v-col>

      <v-col cols="12">
        <{{cookiecutter.model_singular_lower}}-form :form-label="'New {{cookiecutter.model_singular}}'" @new-{{cookiecutter.model_singular_lower}}="addNew{{cookiecutter.model_singular}}" />
      </v-col>

      <v-col v-for="item in items" :key="item.id" cols="12">
        <{{cookiecutter.model_singular_lower}} :{{cookiecutter.model_singular_lower}}="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useAppStore } from "@/stores/appStore"
import {{ cookiecutter.model }}Api from "@/api/{{ cookiecutter.model_lower }}.api.js"
import {{cookiecutter.model_singular}} from "@/components/{{cookiecutter.model_singular}}.vue"
import {{cookiecutter.model_singular}}Form from "@/components/{{cookiecutter.model_singular}}Form.vue"

export default {
  name: "{{ cookiecutter.model }}List",
  components: { {{cookiecutter.model_singular}}, {{cookiecutter.model_singular}}Form },
  setup() {
    const appStore = useAppStore()
    return { appStore }
  },
  data() {
    return {
      loading: false,
      items: [],
    }
  },
  mounted() {
    this.get{{ cookiecutter.model }}()
  },
  methods: {
    get{{ cookiecutter.model }}() {
      this.loading = true
      {{ cookiecutter.model }}Api.get{{ cookiecutter.model }}().then((data) => {
        this.items = data.{{cookiecutter.model_lower}}
        this.loading = false
      })
    },
    addNew{{cookiecutter.model_singular}}({{cookiecutter.model_singular_lower}}) {
      this.loading = true
      {{ cookiecutter.model }}Api.addNew{{cookiecutter.model_singular}}({{cookiecutter.model_singular_lower}}.title).then(({{cookiecutter.model_singular_lower}}) => {
        this.appStore.showSnackbar(`New {{cookiecutter.model_singular_lower}} added #${ {{cookiecutter.model_singular_lower}}.id }`)
        this.get{{ cookiecutter.model }}()
        this.loading = false
        console.log("oi")
      })
    },
  },
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
