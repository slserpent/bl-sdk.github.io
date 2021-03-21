---
layout: mod

authors: "apple1417" # Authors of the mod
title: Apple's Borderlands Cheats # Title of the mod
version: "1.12" # Version of the mod
supported: "BL2 + TPS" # Supported games; currently can only display as "BL2", "BL2 + TPS", or "TPS"

tagline: "Adds keybinds performing various cheaty things." # A short description of the mod itself.
description: "Adds keybinds performing various cheaty things." # This is set in order to keep the SEO proper
longDescription: "Adds keybinds performing various cheaty things.\n\nFeatures include (but are not limited to):\n- Infinite Ammo\n- God Mode\n- One Shot Mode\n- Ghost Mode\n- Kill All\n- Revive Self\n\nOnce enabled, visit your keybinds menu to configure binds for all these. You can also configure presets by pressing `P` when the mod is selected, which will allow you to bind multiple cheats to a single key." # Description of what the mod can do
categories: ['Utility'] # Category of the type of mod

requirements: ['UserFeedback >= 1.3'] # Requirements for the given mod
requirementTitles: ['UserFeedback'] # The link-friendly name of the requirements

issues: ""
download: "https://github.com/apple1417/bl-sdk-mods/raw/master/ApplesBorderlandsCheats/ApplesBorderlandsCheats.zip"
license: ['GNU GPLv3', 'gpl-3.0'] # License name, link about the license from https://choosealicense.com/

date: 2021-03-21T21:10:58.159961Z # Date of when the generation happened (?)
---
**Contents**
* TOC
{:toc}

## {{page.title}}

Mod by: {{page.authors}}
Current Version: {{page.version}}
  - Mod Page Updated: {{ page.date | date: "%-d %B %Y"}}

<p></p>
### Description

{{page.longDescription | markdownify }}

Currently Supports: `{{page.supported}}`

{% if page.categories.size > 0 %}
Categories:
{% for category in page.categories %}
  * {{category}}
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
Report issues here: [{{page.issues}}]({{page.issues}})
{% endif %}

{% if page.license.size > 0 %}
This mod is licensed using {{page.license[0]}} <sup>[?](https://choosealicense.com/licenses/{{page.license[1]}})
{% endif %}