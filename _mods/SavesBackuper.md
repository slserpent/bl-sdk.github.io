---
layout: main

authors: "plu5" # Authors of the mod
title: Saves Backuper # Title of the mod
version: "1.0.0 2021-04-21" # Version of the mod
supported: "BL2" # Supported games; currently can only display as "BL2", "BL2 + TPS", or "TPS"

tagline: "Back up the contents of your saves folder each time you launch the game." # A short description of the mod itself.
description: "Back up the contents of your saves folder each time you launch the game." # This is set in order to keep the SEO proper
longDescription: "Back up the contents of your saves folder each time you launch the game.\n- You can set the number of backups that will be kept, to keep them below a certain threshold.\n- You can set which folder to back up and where to back up to.\n\n\nUserFeedback is required, make sure you remember to install that too.\n\nUsage:\n- On first enable, the paths configuration panel will pop up. There are some guesses made on where your SaveData folder might be. Status will tell you whether they are valid. Verify they are the paths you want or modify them as you see fit.\n- On subsequent launches, the mod will be enabled automatically and save a backup, and no action is required. The panel will not pop up again unless there is a problem with the paths. You can open it manually by pressing C in the mod manager.\n- By default, the number of backups to keep is set to 5. After this number is exceeded, the oldest one will be deleted. You can customise this behaviour in Options -&gt; Mods.\n\nThere is pretty good logging in this mod. You can check what’s going on by looking at the console or log (in `/Binaries/Win32/python-sdk.log`).\n\nMore information is available on the [README](https://github.com/plu5/p-borderlands/tree/main/SavesBackuper)." # Description of what the mod can do
categories: ['Utility'] # Category of the type of mod

requirements: ['UserFeedback >= 1.5'] # Requirements for the given mod
requirementTitles: ['UserFeedback'] # The link-friendly name of the requirements

issues: "https://github.com/plu5/p-borderlands/issues"
download: "https://github.com/plu5/p-borderlands/releases/tag/v1.1.0"
source: "https://github.com/plu5/p-borderlands/blob/main/SavesBackuper" # Link to source code
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
