
// Export selectors engine
var $$ = Dom7;

// Initialize your app
var myApp = new Framework7({
    swipePanel:'left',
    material:true,
});


// Add view
var mainView = myApp.addView('.view-main');
//mainView.hideToolbar();

$$(document).on('pageBeforeAnimation', function (e) {
    // Do something here when page loaded and initialized
    myApp.closePanel();  
});

$$(document).on('pageBeforeInit', function (e) {
    // Do something here when page loaded and initialized
    //mainView.hideToolbar();
    
});  



myApp.onPageInit('index',function(page){
    myApp.closePanel();
});

myApp.onPageInit('result',function(page){
    printResult();
});

myApp.onPageInit('showAll',function(page){
    showAll();
});

var showOneKey;
myApp.onPageInit('showOne',function(page){
    showOneKey=page.query;
    showOne();
});

// for confirm on cancel
$$('.confirm-ok').on('click', function () {
    myApp.confirm('Are you sure?','All Data will be lost.', function () {
        myApp.alert('You clicked Ok button');
    });
});

//busRouteList=['Apple','bus'];
var autocompleteStandalonePopup = myApp.autocomplete({
    openIn: 'popup', //open in popup
    opener: $$('#autocomplete-standalone-popup'), //link that opens autocomplete
    backOnSelect: true, //go back after we select something
    source: function (autocomplete, query, render) {
        var results = [];
        if (query.length === 0) {
            render(results);
            return;
        }
        // Find matched items
        for (var i = 0; i < fruits.length; i++) {
            if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
        }
        // Render items by passing array with result items
        render(results);
    },
    onChange: function (autocomplete, value) {
        // Add item text value to item-after
        $$('#autocomplete-standalone-popup').find('.item-after').text(value[0]);
        // Add item value to input value
        $$('#autocomplete-standalone-popup').find('input').val(value[0]);
    }
});


    
    var autocompleteStandalonePopup = myApp.autocomplete({
        openIn: 'popup', //open in popup
        opener: $$('#autocomplete-standalone-popu'), //link that opens autocomplete
        backOnSelect: true, //go back after we select something
        source: function (autocomplete, query, render) {
            var results = [];
            if (query.length === 0) {
                render(results);
                return;
            }
            // Find matched items
            for (var i = 0; i < fruits.length; i++) {
                if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
            }
            // Render items by passing array with result items
            render(results);
        },
        onChange: function (autocomplete, value) {
            // Add item text value to item-after
            $$('#autocomplete-standalone-popup').find('.item-after').text(value[0]);
            // Add item value to input value
            $$('#autocomplete-standalone-popup').find('input').val(value[0]);
        }
    });  
      
    










/*// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}*/
