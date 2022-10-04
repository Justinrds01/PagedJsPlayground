// don't want to do this on the title page, will be adjusted later
$(".pagedjs_margin:not(.hasContent)").css("visibility", "visible");
$(".pagedjs_margin-top-center .pagedjs_margin-content").html(
  '<p class="top-text"><strong>SPIRIT<sup>IT</sup> EXLERATE |</strong> CONFIGURATION MANUAL | CM/EXL-EN</p>'
);
// add page number to each page
const pageNumber = pages.indexOf(element) + 1;
const id = element.element.attributes.id.value;
const position = pageNumber % 2 === 0 ? "left" : "right";
// add page number to top left of page
$(`#${id} .pagedjs_margin-top-${position} .pagedjs_margin-content`).html(
  pageNumber
);
