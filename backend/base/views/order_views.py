from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from base.models import Products,Order,OrderItem,ShippingAddress
from rest_framework import status
from base.serializers import ProductsSerializer ,OrderSerializers


@api_view(['POST'])
@permission_classes(['IsAuthenticated'])
def addOrderItem(reqest):
    
    user = request.user
    data = request.data
    orderItem = data['orderItem']
    if orderItem and  len(orderItem) == 0 :
        return Response({'detail': 'no order item'},status= status.HTTP_400_BAD_REQUEST)
    else:
        # create order:
        order = Order.objects.create(
            user = user,
            paymentMethod = user[paymentMethod],
            textPrice = user[textPrice],
            totalPrice =user[totalPrice],
            shippingPrice = user[shippingPrice],
        ),
       # cfreate shipping address
        shipping = ShippingAddress.objects.create(
           order = order,
           address = data['shippingAddress']['address'],
           city = data['shippingAddress']['city'],
           postalCode = data['shippingAddress']['country'],

       ),

       #create order Item
    for i in orderItem:
           product = Products.objects.get(_id=i['product'])
           item = OrderItem.objects.create(
               product= product,
               order= order,
               name= name,
               qty = ['qty'],
               price = ['price'],
               image = product.image.url,
           )

    product.countInStock -=item.qty
    product.save()
    serializer =OrderSerializers(order,many=True)
    return Response(serializer.data) 

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOrderById(request,pk):
    user =request.user

    try:
         order= Order.objects.get(_id=pk)
         if user.is_staff or order.user == user:
             serializer = OrderSerializers(order,many =False)
             return Response(serializer.data)
         else: 
             Response({'detail':'Not athorized to view this order'},status= HTTP_400_bad_REQUEST)
    except:
        return Response({'detail': 'order does not exists '},status= HTTP_400_bad_REQUEST)