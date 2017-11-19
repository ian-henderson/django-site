from django.db import models


class Choice(models.Model):
    poll = models.ForeignKey(
        'Poll',
        related_name='choices',
        on_delete=models.CASCADE
    )
    choice = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice


class Poll(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    question = models.CharField(max_length=200)

    def __str__(self):
        return self.question