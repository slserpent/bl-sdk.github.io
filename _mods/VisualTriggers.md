---
layout: main

authors: "GameChanger97" # Authors of the mod
title: Visual Triggers # Title of the mod
version: "1.0" # Version of the mod
supported: "BL2" # Supported games; currently can only display as "BL2", "BL2 + TPS", or "TPS"

tagline: "Toggle visual outlines for the hitboxes of triggers and waypoints with the press of a key!" # A short description of the mod itself.
description: "Toggle visual outlines for the hitboxes of triggers and waypoints with the press of a key!" # This is set in order to keep the SEO proper
longDescription: "Provides keybinds for outlining waypoints and triggers with skeleton debug cylinders.\n![Visual Triggers](https://github.com/GameChanger97/Bl2-Mods/blob/main/Borderlands%202%20(32-bit,%20DX9)%209_15_2021%204_17_58%20PM%20(2).png?raw=true) \nBy default '8' will toggle waypoints and '9' will toggle triggers. \nOnce enabled, you can change the keybinds for showing triggers and waypoints in the keybinds menu. \n \nThere is also an option in the mod menu: \n* The number of lines slider allows you to set the number of line segments you want the debug cylinders to draw with from 6 to 50. \n* Note that the more lines, the more accurate the outline will be to the true hitbox so higher settings is recommended." # Description of what the mod can do
categories: ['Utility'] # Category of the type of mod

requirements: [] # Requirements for the given mod
requirementTitles: [] # The link-friendly name of the requirements

issues: ""
download: "https://github.com/GameChanger97/Bl2-Mods/blob/main/VisualTriggers/VisualTriggers.zip?raw=true"
source: "https://github.com/GameChanger97/Bl2-Mods" # Link to source code
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
