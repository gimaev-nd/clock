from django.shortcuts import render
from django.views.generic import TemplateView
from django.http.request import HttpRequest


def index(request: HttpRequest):
    return render(request, "clock/index.html")


class ModelView(TemplateView):
    template_name = ".html"
