import api from "./config.js"
import apiHelpers from "./helpers.js"

export default {
  get{{ cookiecutter.model }}: () => {
    return new Promise((resolve, reject) => {
      api
        .get("/api/{{ cookiecutter.app_name }}/{{ cookiecutter.model_lower }}/list")
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  },
  addNew{{cookiecutter.model_singular}}: (description) => {
    return new Promise((resolve, reject) => {
      api
        .post("/api/{{ cookiecutter.app_name }}/{{ cookiecutter.model_lower }}/add", apiHelpers.dataToForm({ description }))
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  },
}
