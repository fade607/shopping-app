# Generated by Django 4.0.dev20210525112240 on 2021-08-29 10:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_rename_product_products_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='aboutItem',
            field=models.TextField(blank=True, null=True),
        ),
    ]