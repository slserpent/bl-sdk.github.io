---
layout: main

authors: "mopioid" # Authors of the mod
title: Borderlands Commander # Title of the mod
version: "2.5" # Version of the mod
supported: "BL2 + TPS + AoDK" # Supported games; currently can only display as "BL2", "BL2 + TPS", or "TPS"

tagline: "Provides hotkeys for number of useful functions in-game." # A short description of the mod itself.
description: "Provides hotkeys for number of useful functions in-game." # This is set in order to keep the SEO proper
longDescription: "Provides hotkeys for number of useful functions in-game, including:\n*Saving and teleporting your position in the game.\n*Freezing time.\n*Modifying game speed.\n*Quitting without saving.\n*Toggling HUD elements.\n*Toggling Third Person camera.\nIn addition, you may configure your own arbitrary console commands for which to assign hotkeys." # Description of what the mod can do
categories: ['Utility'] # Category of the type of mod

requirements: ['UserFeedback >= 1.5'] # Requirements for the given mod
requirementTitles: ['UserFeedback'] # The link-friendly name of the requirements

issues: "https://github.com/mopioid/Borderlands-Commander/issues"
download: "https://github.com/mopioid/Borderlands-Commander/releases/tag/2.5"
source: "https://github.com/mopioid/Borderlands-Commander/tree/master" # Link to source code
license: [] # License name, link about the license from https://choosealicense.com/

---
**Contents**
* TOC
{:toc}

## {{page.title}}

Mod by: {{page.authors}}
Current Version: {{page.version}}

<p></p>
### Description

{{page.longDescription | markdownify }}

Currently Supports: `{{page.supported}}`

{% if page.categories.size > 0 %}
Categories:
{% for category in page.categories %}
  * [{{category}}](/types/{{category}})
{% endfor %}
<p></p>
{% endif %}

{% if page.requirements.size > 0 %}
### Requirements

{% for requirement in page.requirements %}

{% assign reqName = page.requirementTitles[forloop.index0] %}

{% for mod in site.mods %}

{% assign modName = mod.path | remove_first: '_mods/' %}
{% assign xz = reqName | append: '.md' %}

{% if modName == xz %}
* [{{ requirement }}]( {{ reqName | relative_url | prepend: '/mods'}} ) <sup>[(Direct Download)]({{mod.download}})</sup>
{% endif %}
{% endfor %}

{% endfor %}
<p></p>
{% endif %}

### Links

{% if page.download != "" %}
You can download {{page.title}} here: [Download Link]({{page.download}})
{% endif %}

{% if page.issues != "" %}
Report issues here: [Issue Tracker]({{page.issues}})
{% endif %}

{% if page.source != "" %}
View the source code here: [Source Code]({{page.source}})
{% endif %}

{% if page.license.size > 0 %}
This mod is licensed using {{page.license[0]}} <sup>[?]({{page.license[1]}})</sup>
{% endif %}
