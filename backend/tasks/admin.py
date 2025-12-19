from django.contrib import admin
from .models import Task, Category, Status

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'color', 'user', 'created_at']
    list_filter = ['user', 'created_at']
    search_fields = ['name']

@admin.register(Status)
class StatusAdmin(admin.ModelAdmin):
    list_display = ['name', 'color', 'user', 'created_at']
    list_filter = ['user', 'created_at']
    search_fields = ['name']

@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ['title', 'status', 'category', 'user', 'created_at']
    list_filter = ['status', 'category', 'user', 'created_at']
    search_fields = ['title']