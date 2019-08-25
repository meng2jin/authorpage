var insertContent = function(content, cb) {
  $('.content-pane').html($(content));
  $('.content-pane div').fadeIn('1000')
  if ( typeof cb === 'function' ) {
    cb();
  }
};

var highlightCurrentNavItem = function(route) {
  var classSelector ='.' + route + '-link';
  $('.nav-items').find('.active-nav-item').removeClass('active-nav-item');
  $(classSelector).addClass('active-nav-item');
};

var homeTypeEffect = function() {
  var stringToType = 'Meng<br>writes<br>a<br><p class="typed-place">book:</p>';

  var options = {
    strings: [stringToType],
    showCursor: false,
    typeSpeed: 15,
    startDelay: 100,
    onComplete: function() { $('.cover').fadeIn({ duration: 1000 }) }
  };

  new Typed('.type-container', options);
};

var homeContent = $('#home-content').html();
var bioContent = $('#bio-content').html();
var writingContent = $('#writing-content').html();
var contactContent = $('#contact-content').html();
var littleGodsContent = $('#little-gods-content').html();

var routes = {
  '/': function() {
    insertContent(homeContent, homeTypeEffect);
    highlightCurrentNavItem('home');
  },
  '/bio': function() {
    insertContent(bioContent);
    highlightCurrentNavItem('bio');
  },
  '/writing': function() {
    insertContent(writingContent);
    highlightCurrentNavItem('writing');
  },
  '/contact': function() {
    insertContent(contactContent);
    highlightCurrentNavItem('contact');
  },
  '/little-gods': function() {
    insertContent(littleGodsContent);
    highlightCurrentNavItem('little-gods');
  }
};

var router = Router(routes);

$(function() {
  router.init('/');
});
