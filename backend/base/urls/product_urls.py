from rest_framework.routers import DefaultRouter
from django.urls import path, include
from base.views import product_views as views


router = DefaultRouter()
router.register('', views.viewsets_products),


urlpatterns = [
 
    path('', include(router.urls)),
    path('<str:px>/reviews/',views.createProductReview)

    
]