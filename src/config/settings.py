from .config.default_django import *  # noqa

LIB_APPS = [
    "django_cotton",
]
USER_APPS = ["clock"]

INSTALLED_APPS += LIB_APPS + USER_APPS  # noqa: F405
