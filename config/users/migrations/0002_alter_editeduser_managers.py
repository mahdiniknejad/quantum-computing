# Generated by Django 4.2.1 on 2023-05-10 19:53

from django.db import migrations
import users.managers


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='editeduser',
            managers=[
                ('objects', users.managers.UserManager()),
            ],
        ),
    ]
