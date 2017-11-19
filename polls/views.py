from django.shortcuts import get_object_or_404
from rest_framework import status, viewsets
from rest_framework.decorators import detail_route, list_route
from rest_framework.response import Response

from .models import Choice, Poll
from .serializers import ChoiceSerializer, PollSerializer


class ChoiceViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing accounts.
    """
    queryset = Choice.objects.all()
    serializer_class = ChoiceSerializer

    @detail_route(methods=['post'])
    def vote(self, request, pk):
        choice = get_object_or_404(Choice, pk=pk)
        choice.votes += 1
        choice.save()
        choice_data = ChoiceSerializer(choice).data
        return Response(choice_data, status=status.HTTP_200_OK)


class PollViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing accounts.
    """
    queryset = Poll.objects.all()
    serializer_class = PollSerializer