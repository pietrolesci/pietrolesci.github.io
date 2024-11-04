---
layout: page
permalink: /research/
title: research
# description: Publications by categories in reversed chronological order.
years: [2024, 2023]
nav: true
nav_order: 2
---


I am passionate about the science of language models: developing methods---also drawing from econometrics---to study the effect of training data on models’ behaviour. Currently, I focus on active learning, data valuation, and memorisation estimation.
See the up-to-date list of publications on my <a href="https://scholar.google.com/citations?user=uRIcVlAAAAAJ" title="Google Scholar">Google Scholar</a> page.

<span class="star">*</span> denotes equal contribution.


<!-- _pages/publications.md -->
<div class="publications">
<h1>Preprints</h1>
{%- for y in page.years %}
  {% bibliography -f papers -q @*[year={{y}} && preprint=true] %}
{% endfor %}

<h1>Conference & Journal Articles</h1>
{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}} && preprint!=true] %}
{% endfor %}

</div>
