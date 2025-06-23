---
layout: page
permalink: /outreach/
title: outreach
# description: Materials for courses you taught. Replace this text with your description.
nav: true
nav_order: 4
---

In this page, I list the awards I have received, the workshops I have co-organised, and the invited talks I have given.


<!-- reads from _data/outreach.yml -->

## Awards
<table class="table table-hover table-sm">
    <colgroup>
        <col style="width: auto;">
        <col style="width: auto;">
        <col style="width: auto;">
        <col style="width: auto;">
        <col style="width: auto;">
    </colgroup>
    <thead>
        <tr>
            <th scope="col">Date</th>
            <th scope="col">Title</th>
            <th scope="col">Event</th>
            <th scope="col">Description</th>
            <th scope="col">Social</th>
        </tr>
    </thead>
    <tbody>
        {% assign sorted_awards = site.data.outreach.awards | sort: 'date' | reverse %}
        {% for award in sorted_awards %}
        <tr>
            <th scope="row">{{ award.date | date: "%d %b %Y" }}</th>    
            <td><a href="{{ award.url }}">{{ award.title }}</a></td>
            <td>{{ award.event }}</td>
            <td>{{ award.description }}</td>
            <td>
                {% if award.social %}
                    {% for social in award.social %}
                    <a href="{{ social.url }}">{{ social.name }}</a>{% if forloop.last == false %}, {% endif %}
                    {% endfor %}
                {% endif %}
            </td>
        </tr>
        {% endfor %}
    </tbody>
</table>


## Workshops

<table class="table table-hover table-sm">
    <colgroup>
        <!-- <col style="width: auto;"> -->
        <col style="width: auto;">
        <col style="width: auto;">
        <col style="width: auto;">
        <col style="width: auto;">
    </colgroup>
    <thead>
        <tr>
            <!-- <th scope="col">Date</th> -->
            <th scope="col">Title</th>
            <th scope="col">Venue</th>
            <th scope="col">Social</th>
            <th scope="col">Organisers</th>
        </tr>
    </thead>
    <tbody>
        {% assign sorted_workshops = site.data.outreach.workshops | sort: 'date' | reverse %}
        {% for workshop in sorted_workshops %}
        <tr>
            <!-- <th scope="row">{{ workshop.date | date: "%d %b %Y" }}</th> -->
            <td><a href="{{ workshop.url }}">{{ workshop.title }}</a></td>    <td>{{ workshop.venue }}</td>
            <td>
                {% for social in workshop.social %}
                    <a href="{{ social.url }}">{{ social.name }}</a>{% if forloop.last == false %}, {% endif %}
                {% endfor %}
            </td>
            <td>
                {% assign organisers = workshop.organisers | join: ", " %}
                {% if organisers contains "Pietro Lesci" %}
                    {{ organisers | replace: "Pietro Lesci", "<u>Pietro Lesci</u>" }}
                {% else %}
                    {{ organisers }}
                {% endif %}
            </td>    </tr>
        <tr>
            <td colspan="6"><strong>Program Committee:</strong> {{ workshop.program_committee | join: ", " }}</td>
        </tr>
        {% endfor %}
    </tbody>
</table>


## Invited Talks

<table class="table table-hover table-sm">
    <colgroup>
        <col style="width: auto;">
        <col style="width: auto;">
        <col style="width: auto;">
    </colgroup>
    <thead>
        <tr>
            <th scope="col">Date</th>
            <th scope="col">Invited By</th>
            <th scope="col">Institution</th>
        </tr>
    </thead>
    <tbody>
        {% assign sorted_talks = site.data.outreach.invited_talks | sort: 'date' | reverse %}
        {% for talk in sorted_talks %}
        <tr>
            <th scope="row">{{ talk.date | date: "%d %b %Y" }}</th>
            <td>{{ talk.invited_by }}</td>
            <td>{{ talk.institution }}</td>
        </tr>
        {% endfor %}
    </tbody>
</table>


