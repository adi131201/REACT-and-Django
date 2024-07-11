from django.urls import path
from app1 import views

urlpatterns = [
    path('student/', views.StudentList.as_view())
]
