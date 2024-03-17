---
layout: main

authors: "mopioid" # Authors of the mod
title: Reign Of Giants # Title of the mod
version: "1.2" # Version of the mod
supported: "BL2" # Supported games; currently can only display as "BL2", "BL2 + TPS", or "TPS"

tagline: "Encounter rare, gigantic variants of enemies throughout the Borderlands." # A short description of the mod itself.
description: "Encounter rare, gigantic variants of enemies throughout the Borderlands." # This is set in order to keep the SEO proper
longDescription: "It's a concept we all know and love: Rare enemy variants, like Loot Midgets and Tubbies. Reign Of Giants extends this to every enemy in the game.\n\nYes, every enemy in the game! In Reign Of Giants, Psychos, Loaders, Saturn, Loot Midgets, Varkids, Savage Lee, Dexiduous the Invincible... All have a rare chance of spawning as a gigantic version of their normal self.\n\nUpon encountering a Giant, you will be faced with an enemy notably stronger than the common variant, but will be appropriately rewarded. In addition to more XP, Giants drop a guaranteed item from a specialized loot pool." # Description of what the mod can do
categories: ['Gameplay'] # Category of the type of mod

requirements: [] # Requirements for the given mod
requirementTitles: [] # The link-friendly name of the requirements

issues: "https://github.com/mopioid/Borderlands-Reign-Of-Giants/issues"
download: "https://github.com/mopioid/Borderlands-Reign-Of-Giants/releases/tag/1.2"
source: "https://github.com/mopioid/Borderlands-Reign-Of-Giants/tree/main" # Link to source code
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
