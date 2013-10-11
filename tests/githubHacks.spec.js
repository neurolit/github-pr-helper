describe("githubHacks module", function() {

  beforeEach(module('githubHacks'));

  describe('addFlashMessages', function() {
  
    describe('pullsList directive', function() {

      it('adds a flash messages tag to its children', inject(function($compile, $rootScope) {
        var element = $compile('<div class="pulls-list"></div>')($rootScope);
        expect(element.children().length).toEqual(1);
        expect(element.children().eq(0).hasClass('flash-messages')).toBeTruthy();
      }));
    });


    describe('viewPullRequest directive', function() {

      it('adds a flash messages tag to its children', inject(function($compile, $rootScope) {
        var element = $compile('<div class="view-pull-request"></div>')($rootScope);
        expect(element.children().length).toEqual(1);
        expect(element.children().eq(0).hasClass('flash-messages')).toBeTruthy();
      }));
    });

  });

  describe('terminateCompilation', function() {

    describe('discussionTimeline directive', function() {

      it('should not compile the contents and add a class', inject(function($compile, $rootScope) {
        var element = $compile ('<div class="discussionTimeline">{{1 + 2}}</div>')($rootScope);
        $rootScope.$digest();
        expect(element.text()).toEqual('{{1 + 2}}');
        expect(element.hasClass('ng-terminated')).toBeTruthy();
      }));
    });

    describe('diffView directive', function() {

      it('should not compile the contents and add a class', inject(function($compile, $rootScope) {
        var element = $compile ('<div class="diffView">{{1 + 2}}</div>')($rootScope);
        $rootScope.$digest();
        expect(element.text()).toEqual('{{1 + 2}}');
        expect(element.hasClass('ng-terminated')).toBeTruthy();
      }));
    });

    describe('commit directive', function() {

      it('should not compile the contents and add a class', inject(function($compile, $rootScope) {
        var element = $compile ('<div class="commit">{{1 + 2}}</div>')($rootScope);
        $rootScope.$digest();
        expect(element.text()).toEqual('{{1 + 2}}');
        expect(element.hasClass('ng-terminated')).toBeTruthy();
      }));
    });
  });

});