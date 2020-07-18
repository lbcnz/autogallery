#!/bin/bash
# Create a light self-contained web gallery from the images inside the target dir. 

# TODO: Implement a tags feature where images can be filtered based on tags.
# TODO: Implement a config file feature. Should be a way to regenerate the gallery when new images are added without losing the images description and tags.
# TODO: Implement outline when hovering cards.
# TODO: Implement browsing by keyboard arrows.

cd $1;

echo -e "<head>\n\t<meta charset='utf-8'>\n\t<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=yes'>\n\t<title>Gallery</title>\n\t<link rel='stylesheet' href='../lib/lightgallery/css/lightgallery.css'>\n\t<link rel='stylesheet' href='../lib/autogallery.css'>\n\t<script src='../lib/lightgallery/js/lightgallery.min.js'></script>\n\t<script src='../lib/autogallery.js'></script>\n</head>\n\n<body>\n\t<div class='button-wrap' id='button-sfw-wrap'><button id='button-sfw' onclick='toogleNSFW()'>Show</button></div>\n\t<div class='button-wrap' id='button-nsfw-wrap'><button id='button-nsfw' onclick='toogleNSFW()'>Hide</button></div>\n\t<div class='button-wrap2' id='button-shuffle-wrap'><button id='button-shuffle' onclick='shuffleCards()'>Shuffle</button></div>\n\n\t<h1>Title Here</h1>\n\t<h4>Subtitle Here</h4>\n\n\t<div id='lightgallery'>" > index.html;

for f in $( ls *.jpg ); # FIXME: It doesn't support PNG or other image formats.
do
    echo -e "\t\t<a href='$f' data-sub-html=''><img class='card-img' src='$f'></a>"
done >> index.html;

echo -e "\n\t</div>\n\n\t<script>\n\t\tshuffleCards()\n\t\tinitGallery()\n\t</script>\n</body>" >> index.html;

