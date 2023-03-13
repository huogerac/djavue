// Composables
import DefaultLayout from "@/layouts/default/DefaultLayout.vue"
import {{cookiecutter.model_singular}}ListView from "@/views/{{ cookiecutter.main_app }}/{{cookiecutter.model_singular}}ListView.vue"

export default [
  {
    path: "/{{ cookiecutter.model_lower }}",
    component: DefaultLayout,
    children: [
      {
        path: "list",
        name: "{{ cookiecutter.model_lower }}-list",
        component: {{cookiecutter.model_singular}}ListView,
      },
    ],
  },
]
