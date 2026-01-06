from django.http import HttpResponse
from django.shortcuts import render, redirect, get_object_or_404
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.views.generic import ListView

# from Olamide.frontend.models import *
# from django.contrib.auth.models import User
# from django.core.exceptions import ObjectDoesNotExist
# from frontend.models import *
# from backend.forms import *
# from users.models import *
# from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger


# for sending mail import
# from django.conf import settings
# from django.core import mail
# from django.template.loader import render_to_string
# from django.contrib import messages
# from django.utils.html import strip_tags
# end

# Create your views here.

def index(request):
    return render(request, 'frontend/index.html')


def about(request):
    return render(request, 'frontend/about.html')


def rider(request):
    return render(request, 'frontend/rider.html')
