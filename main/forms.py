from django import forms
from .models import images

class YourModelForm(forms.ModelForm):
    class Meta:
        model = images
        fields = ['image']
        labels = {
            'image': 'Выбери фото профиля',
        }