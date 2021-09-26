from rest_framework.routers import DefaultRouter
from django.urls import path, include
from base.views import user_views as views
from rest_framework.authtoken.views import obtain_auth_token




urlpatterns = [
    path('profile/', views.getUsersProfile),
    path('register/',views.registerUser,name='register'),
    path('',views.getUsers),
    path('login/',views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/',obtain_auth_token)
   
    
]