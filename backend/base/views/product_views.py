from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework.response import Response
from rest_framework import status

from base.models import *
from base.serializers import *
# Create your views here. 



class viewsets_products(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer




@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createProductReview(request,pk):
    user = request.user
    product = Products.objects.get(_id=pk)
    data = request.data

    #1 already exists
    alreadyExists = product.review_set.filter(user=user).exists()
    if alreadyExists:
        content = {'detial': 'product already exists'}
        return Response(content,status=status.HTTP_400_BAD_REQUEST)
    #2 no reating or 0
    elif data['rating'] ==0 :
        content ={'detial': 'please selcet a rating '}
        return Response(content,status=status.HTTP_400_BAD_REQUEST)
    #3 create review
    else:
        review = Review.objects.create(
           user= user,
           product = product,
           name = user.first_name,
           rating= data['rating'],
           comment = data['comment']
        )
        reviews = product.review.all()
        product.numReviews= len(reviews)

        total = 0
        for i in reviews:
            total += i.rating
        product.rating = total/len(reviews)    
        product.save()

        return Response('Reviwe added')
