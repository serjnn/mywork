from django.shortcuts import render, redirect


from .forms import YourModelForm

def main(request):
    if request.method == 'POST':
        form = YourModelForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('main')  # Замените 'success_page' на URL вашей страницы успешного завершения
    else:
        form = YourModelForm()

    return render(request, 'main/index.html', {'form': form,'title':'Главная'})