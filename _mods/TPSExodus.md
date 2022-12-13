---
layout: main

authors: "Exotek, juso" # Authors of the mod
title: TPS Exodus # Title of the mod
version: "1.0.3" # Version of the mod
supported: "TPS" # Supported games; currently can only display as "BL2", "BL2 + TPS", or "TPS"

tagline: "Find completely NEW gear pieces that do not replace existing gear. New mechanics, new mini bosses... and more." # A short description of the mod itself.
description: "Find completely NEW gear pieces that do not replace existing gear. New mechanics, new mini bosses... and more." # This is set in order to keep the SEO proper
longDescription: "Features:\n- Kill it with fire! But only if it's fleshy. Rebalanced elemental damage that punishes you for using conflicting types, and applies new debuffs depending on the type you use - regardless of weakness.\n- Be what you set out to be. Vault Hunters are now better at what they're good at, and worse at what they're not. Zer0 for example is more agile, but less resilient, while Salvador has the opposite effects.\n- Guns that are greater than the sum of their parts. Weapon parts have been rebalanced across the board, sharpening up some of the underperforming pieces of the arsenal, and generally making them more specialized. Matching parts still kick ass!\n- Take the time to accessorize. Weapon accessories are now standardized across all weapon types.\n- New unique items. Discover new and exciting ways to mutilate your enemies.\n- New mini bosses. Got to find them all!\n- New rarity. Pearls! Yup, they are back. \n- Shields, but better. Shields now have improved stats based on their manufacturer, and boast greatly improved (and some new) special effects.\n- Introducing the Manly Shield line, as designed by Jakob's. Experience the feeling of bullets entering your flesh, without the searing pain. Jakob's Manly shields have no capacity, but boost your maximum health, and health regeneration.\n- … and much, much more.\nCheck out the full BL_TPS:Exodus changelog [here](https://docs.google.com/document/d/1sjfzrnl_MseW9tjlzaig0bYu2longbxEeibnIkCC23c)" # Description of what the mod can do
categories: ['Content'] # Category of the type of mod

requirements: [] # Requirements for the given mod
requirementTitles: [] # The link-friendly name of the requirements

issues: "https://www.nexusmods.com/borderlandspresequel/mods/44?tab=bugs"
download: "https://www.nexusmods.com/borderlandspresequel/mods/44?tab=files&file_id=101"
source: "https://www.nexusmods.com/borderlandspresequel/mods/44?tab=files" # Link to source code
license: ['MIT', 'https://choosealicense.com/licenses/mit'] # License name, link about the license from https://choosealicense.com/

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
