from django.urls import path

from . import views

urlpatterns = [
    path("add", views.add_{{cookiecutter.model_singular_lower}}),
    path("list", views.list_{{cookiecutter.model_lower}}),
]
