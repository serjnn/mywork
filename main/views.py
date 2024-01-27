from django.shortcuts import render, redirect
from .models import images

from .forms import YourModelForm

def main(request):
    if request.method == 'POST':
        files = request.FILES.getlist('image')  # Используйте правильное имя поля
        for file in files:
            images.objects.create(image=file)  # Используйте правильное имя модели
        return redirect('main')  # Замените 'success_page' на URL вашей страницы успешного завершения
    else:
        form = YourModelForm()

    return render(request, 'main/index.html', {'form': form, 'title': 'Главная'})



