$(document).ready(function() {
    $("img").each(function(idx, img) {
        const alt = img.alt.toLowerCase();
        if (!(alt == "yt" || alt == "youtube")) {
            return;
        }

        // Original regex taken from https://stackoverflow.com/a/37704433
        const src = img.getAttribute('src'),
            matches = src.match(/^(?:(?:https?:)?\/\/)?(?:(?:www|m)\.)?(?:(?:youtube\.com|youtu.be))?(?:\/(?:[\w\-]+\?v=|embed\/|v\/)?)?([\w\-]+)(?:[\?\&](\S+))?\s*$/);
        if (!matches) {
            img.alt = `Unrecognized YouTube URL format for "${src}"`
            return;
        }

        const id = matches[1],
            query = matches[2];

        img.outerHTML = `
            <div class="video-16-9">
                <iframe
                    src="https://www.youtube.com/embed/${id}?${query}"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        `;
    });
});