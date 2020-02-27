from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

from users import api as api_users

urlpatterns = [
    path('api/users/auth/', obtain_auth_token),
    path('api/users/', include('users.urls')),
]
