/*edit menuhtml to your  desired list
Example below
*/
let menuhtml=`<h3>Shared Content</h3>
<ul>
	<li><a href="https://ubcms-author.buffalo.edu/sites.html/content/shared/university/news">University News</a></li>
	</li>
</ul>
<h3>Sites</h3>
<ul>
	<li><a href="https://ubcms-author.buffalo.edu/sites.html/content/www/">www.buffalo.edu</a></li>
</ul>`;


$('.globalnav-toggle').after('<div id="bookmarks"><div>Bookmarks</div><div id="bookmarkmenu">'+menuhtml+'</div></div>');

$('#bookmarks').on('click',function(e){
	e.stopPropagation();
	$('#bookmarkmenu').toggle();
});

$('html').on('click',function(){
	if ( $('#bookmarkmenu').is(':visible') ){
		$('#bookmarkmenu').hide();
	}
})

$(window).on('load', function() {
	loadEditPageLink();
});

$('body').on('DOMSubtreeModified', '.betty-breadcrumbs-button-innerwrapper span', function(){
	//currently doesn't work if you make selection in parent hierarchy
  loadEditPageLink();
});

function loadEditPageLink(){
	$('div.coral-Table-wrapper-container td.foundation-collection-item-title a.foundation-layout-table-cellwrapper').each(function(){
	
	let editlink=$(this).attr('href');
	const regex = /\/sites.html/gm;
	
	let openlink=editlink.replace(regex, '/editor.html');
	openlink='https://ubcms-author.buffalo.edu'+openlink+'.html';
	$(this).after('<div><a class="openlink" target="_blank" href="'+openlink+'">Edit Page</a></div>');
});
}