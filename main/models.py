from django.db import models

class images(models.Model):
    image = models.ImageField(upload_to='images/')
    def __str__(self):
        return 'фотография'
    class Meta:
        verbose_name = 'фотография'
        verbose_name_plural = 'фотографии'


