from django.shortcuts import render
from django.contrib.auth.views import (
    LoginView,
    LogoutView,
    # PasswordChangeView,
    # PasswordResetView,
    # PasswordResetConfirmView,
    # PasswordResetDoneView,
    # PasswordChangeDoneView,
    # PasswordResetCompleteView,
)
from django.views.generic import CreateView, View
from django.contrib.auth import get_user_model
from .forms import UserSignupForm


User = get_user_model()


class SignupView(View):

    def get(self, request, *args, **kwargs):
        form = UserSignupForm()
        return render(request, 'auth/signup.html', context={'form': form})

    def post(self, request, *args, **kwargs):
        form = UserSignupForm(request.POST)
        
        if form.is_valid():
            user = User(email=form.cleaned_data['email'])
            user.set_password(form.cleaned_data['password1'])
            user.save()

        return render(request, 'auth/signup.html', context={'form': form})


class EditedLoginView(LoginView):
    template_name: str = 'auth/login.html'


class EditedLogoutView(LogoutView):
    pass
