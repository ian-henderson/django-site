from django.contrib import admin

from .models import Poll, Choice


class ChoiceInline(admin.TabularInline):
    model = Choice
    extra = 3


class PollAdmin(admin.ModelAdmin):
    fields = ['question']
    inlines = [ChoiceInline]
    list_display = ('question', 'created')
    list_filter = ['created']
    search_fields = ['question']


admin.site.register(Poll, PollAdmin)