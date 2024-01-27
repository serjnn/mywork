from django import forms
from .models import images
from django.forms import ClearableFileInput
class YourModelForm(forms.ModelForm):
    class Meta:
        model = images
        fields = ['image']
        labels = {
            'image': 'Выбери фото профиля',
        }
        widgets = {
            'image': ClearableFileInput(attrs={'multiple': True}),
        }