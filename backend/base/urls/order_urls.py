from rest_framework.routers import DefaultRouter
from django.urls import path, include
from base.views import order_views as  views

urlpatterns = [
    path('add/',views.addOrderItem),
    path('<str:px>/',views.getOrderById)
    
]