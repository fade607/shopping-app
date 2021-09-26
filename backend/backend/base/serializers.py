from django.db.models.fields import Field
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from .models import *
from django.contrib.auth.models import User



class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id','id','username','email','name','isAdmin']

        def get__id(self,obj):
            return obj.id

        def get_isAdmin(self,obj):
            return obj.is_staff
        
        def get_name(self,obj):
            name = obj.first_name
            if name == '':
                name = obj.email
            return name
class UserSerializerWithToken(UserSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        
        fields = ['id','id','username','name','email','isAdmin','token']

    def get_token (self,obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

    def get_name(self,obj):
            name = obj.first_name
            if name == '':
                name = obj.email
            return name

    
    def get_isAdmin(self,obj):
            return obj.is_staff


class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'


class ReviewSerializers(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'


class OrderSerializers(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'



class OrderItemSerializers(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'


class ShippingAddressSerializers(serializers.ModelSerializer):
    class Meta:
        model = ShippingAddress
        fields = '__all__'



class OrderItemSerializers(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'
class OrderSerializers(serializers.ModelSerializer):
    order = serializers.SerializerMethodField(read_only=True)
    shippingAddress = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Order 
        fields = '__all__'
    def get_order(self,obj):
        items = obj.orderItem_set.all()
        serializer = OrderSerializers(items,many=True)
        return serializer.data
    def get_shippingAddress(self,obj):
           
        try:
            address = ShippingAddressSerializer(
                obj.shippingAddress,many= False
            )

        except:
            address = False
        return address

    def get_user(self,obj):
        user = obj.user
        serializer = UserSerializer(user,many=False)
        return serializer.data